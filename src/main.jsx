import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import NewContact from "./components/new-contact/NewContact.jsx";
import EditContact from "./components/edit-contact/EditContact.jsx";
import loginAction from "./actions/loginAction.js";
import registerAction from "./actions/registerAction.js";
import contactsLoader from "./loaders/contactsLoader.js";
import deleteContactAction from "./actions/deleteContactAction.js";
import createContactAction from "./actions/createContactAction.js";
import editContactAction from "./actions/editContactAction.js";
import contactLoader from "./loaders/contactLoader.js";
import logoutLoader from "./loaders/logoutLoader.js";
import "./main.css";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: ({ request }) => {
      const url = new URL(request.url);

      if (url.pathname === "/") {
        return redirect("/login");
      }

      return null;
    },
    children: [
      {
        path: "/login",
        element: <Login />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );
          const { successData, errorData } = await loginAction(
            baseUrl,
            formData,
          );

          if (errorData) {
            return errorData.data;
          }

          return redirect(`/${successData.userId}/contacts`);
        },
      },
      {
        path: "/logout",
        loader: async () => {
          await logoutLoader(baseUrl);
          return redirect("/login");
        },
      },
      {
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );
          const errorData = await registerAction(baseUrl, formData);

          if (errorData) {
            return errorData.data;
          }

          return redirect("/login");
        },
      },
      {
        path: "/:user_id/contacts",
        element: <Contacts />,
        loader: async ({ params }) => {
          const { successData, errorData } = await contactsLoader(
            baseUrl,
            params.user_id,
          );

          if (errorData) {
            throw new Response(null, {
              status: errorData.status,
              statusText: errorData.statusText,
            });
          }

          return successData.contacts;
        },
        action: async ({ request, params }) => {
          if (request.method === "DELETE") {
            const contactId = (await request.formData()).get("contact_id");
            await deleteContactAction(baseUrl, params.user_id, contactId);
            return null;
          }
        },
      },
      {
        path: "/:user_id/contacts/new",
        element: <NewContact />,
        action: async ({ request, params }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );
          const errorData = await createContactAction(
            baseUrl,
            params.user_id,
            formData,
          );

          if (errorData) {
            return errorData.data;
          }

          return redirect(`/${params.user_id}/contacts`);
        },
      },
      {
        path: "/:user_id/contacts/:contact_id/edit",
        element: <EditContact />,
        loader: async ({ params }) => {
          const { successData, errorData } = await contactLoader(
            baseUrl,
            params.user_id,
            params.contact_id,
          );

          if (errorData) {
            throw new Response(null, {
              status: errorData.status,
              statusText: errorData.statusText,
            });
          }

          return successData.contact;
        },
        action: async ({ request, params }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );
          console.log(formData);
          const errorData = await editContactAction(
            baseUrl,
            params.user_id,
            params.contact_id,
            formData,
          );

          if (errorData) {
            return errorData.data;
          }

          return redirect(`/${params.user_id}/contacts`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
