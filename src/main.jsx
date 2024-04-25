import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import Contact, { loader as contactLoader } from "./routes/contact.jsx";
import ErrorPage from "./error-page.jsx";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import Home from "./layaults/home/Home.jsx";
import Perfil from "./layaults/perfil/Perfil.jsx";
import MenuForm from "./layaults/forms/MenuForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contacid",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/registro",
        element: <MenuForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
