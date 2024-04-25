import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import Login from "./components/login/Login.jsx";
import ProtectedRoot from "./routes/protectedRoot.jsx";
import RegistroRoot from "./routes/registro.jsx";
import PerfilRoot from "./routes/perfil.jsx";

import { AuthProvider } from "./auth/AuthPorvider.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <h1>Registro</h1>,
  },
  {
    path: "/",
    element: <ProtectedRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "registro",
        element: <RegistroRoot />,
      },
      {
        path: "perfil",
        element: <PerfilRoot />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
