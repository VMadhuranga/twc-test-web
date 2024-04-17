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
import loginAction from "./actions/loginAction.js";
import registerAction from "./actions/registerAction.js";
import contactsLoader from "./loaders/contactsLoader.js";
import deleteContactAction from "./actions/deleteContactAction.js";

const baseUrl = "http://localhost:3000";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
