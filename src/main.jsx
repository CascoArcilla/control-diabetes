import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import { action as loginAction } from "./components/login/Login.jsx";
import SignUp, { action as signUpAction } from "./components/signup/SignUp.jsx";
import Root from "./routes/root.jsx";
import RegistroRoot from "./routes/registro.jsx";
import PerfilRoot from "./routes/perfil.jsx";

import { AuthProvider } from "./auth/AuthPorvider.jsx";
import FormGlucosa, {
  action as glucosaAction,
} from "./components/forms/FormGlucosa.jsx";
import FormAlimento, {
  action as alimentoAction,
} from "./components/forms/FormAlimento.jsx";

import { loader as homeLoader } from "./components/home/Home.jsx";
import HomeRoot from "./routes/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    action: loginAction,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
        action: signUpAction,
      },
    ],
  },
  {
    path: "home",
    element: <HomeRoot />,
    loader: homeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "registro",
    element: <RegistroRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "glucosa",
        element: <FormGlucosa />,
        action: glucosaAction,
      },
      {
        path: "alimento",
        element: <FormAlimento />,
        action: alimentoAction,
      },
    ],
  },
  {
    path: "perfil",
    element: <PerfilRoot />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
