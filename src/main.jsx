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
import loginAction from "./actions/loginAction.js";

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

          return redirect(`/${successData.userId}`);
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
