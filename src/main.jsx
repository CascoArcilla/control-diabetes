import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import { action as loginAction } from "./components/login/Login.jsx";
import ProtectedRoot from "./routes/protectedRoot.jsx";
import RegistroRoot from "./routes/registro.jsx";
import PerfilRoot from "./routes/perfil.jsx";

import { AuthProvider } from "./auth/AuthPorvider.jsx";
import FormGlucosa, {
  action as glucosaAction,
} from "./components/forms/FormGlucosa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoot />,
    errorElement: <ErrorPage />,
    action: loginAction,
    children: [
      {
        path: "registro",
        element: <RegistroRoot />,
      },
      {
        path: "registro/glucosa",
        element: <FormGlucosa />,
        action: glucosaAction,
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
