import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { signUpAction } from "./functions/actions/actionSignup.js";
import { loginAction } from "./functions/actions/actionLogin.js";
import { glucosaAction } from "./functions/actions/actionGlucosa.js";
import { alimentoAction } from "./functions/actions/actionAlimento.js";

import { homeLoader } from "./functions/loaders/loaderHome.js";

import ErrorPage from "./error-page.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import Root from "./routes/root.jsx";
import RegistroRoot from "./routes/registro.jsx";
import PerfilRoot from "./routes/perfil.jsx";

import { AuthProvider } from "./auth/AuthPorvider.jsx";
import FormGlucosa from "./components/forms/FormGlucosa.jsx";
import FormAlimento from "./components/forms/FormAlimento.jsx";
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
