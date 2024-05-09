import { useEffect, useState } from "react";
import { Form, Navigate, useActionData } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";

export default function SignUp() {
  const action = useActionData();
  const { isAuthenticated } = useAuth();

  let [userRegister, setUserRegister] = useState(false);
  useEffect(() => {
    if (action) {
      if (action.message == "Ok" && action.state) {
        setUserRegister(!userRegister);
      }
    }
  }, [action]);

  if (userRegister) return <Navigate to="/" />;
  if (isAuthenticated) return <Navigate to="/home" />;

  return (
    <>
      {userRegister ? (
        <>
          <h2 className="text-center fw-bold ">Usuario registrado</h2>
          <p className="text-center ">Ya puedes iniciar sesion</p>
        </>
      ) : (
        <Form
          method="post"
          className="bg-body-secondary rounded  py-3 px-3  container-sm container-max-400 d-flex flex-column gap-1  align-items-center justify-content-center"
        >
          <h1 className="fw-bold ">Registrate</h1>
          {action && (
            <div className="container-fluid p-0 border border-danger fw-bolder text-danger text-center">
              <p className="p-0 m-0 ">{action.message}</p>
            </div>
          )}
          <div className="container-fluid p-0 d-flex gap-1 ">
            <div>
              <label
                htmlFor="input-name"
                className="form-label fw-bold m-0 p-0"
              >
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="input-name"
                name="nombre"
                required
              />
            </div>
            <div>
              <label
                htmlFor="input-apellido"
                className="form-label fw-bold m-0 p-0"
              >
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="input-apellido"
                name="apellido"
                required
              />
            </div>
          </div>
          <div className="container-fluid p-0 ">
            <label
              htmlFor="input-username"
              className="form-label fw-bold m-0 p-0"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="input-username"
              name="username"
              required
            />
          </div>
          <div className="container-fluid p-0 d-flex gap-1">
            <div>
              <label
                htmlFor="input-edad"
                className="form-label fw-bold m-0 p-0"
              >
                Edad
              </label>
              <input
                type="number"
                className="form-control"
                id="input-edad"
                name="edad"
                required
              />
            </div>
            <div>
              <label
                htmlFor="input-peso"
                className="form-label fw-bold m-0 p-0"
              >
                Peso(kg)
              </label>
              <input
                type="number"
                className="form-control"
                id="input-peso"
                name="peso"
                required
              />
            </div>
            <div>
              <label
                htmlFor="input-altura"
                className="form-label fw-bold m-0 p-0"
              >
                Altura(cm)
              </label>
              <input
                type="number"
                className="form-control"
                id="input-altura"
                name="altura"
                required
              />
            </div>
          </div>
          <div className="container-fluid p-0 ">
            <label
              htmlFor="input-password"
              className="form-label fw-bold m-0 p-0"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="input-password"
              name="password"
              required
            />
          </div>
          <div className="container-fluid p-0 ">
            <label
              htmlFor="input-password-verify"
              className="form-label fw-bold m-0 p-0"
            >
              Verifica contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="input-password-verify"
              name="verifyPassword"
              required
            />
          </div>
          <div className="container-fluid p-0 mt-2 ">
            <button type="submit" className="btn btn-primary w-100 ">
              Submit
            </button>
          </div>
        </Form>
      )}
    </>
  );
}
