import { Form, useActionData } from "react-router-dom";
import { getUserByUserName } from "../../storage/users";
import { useAuth } from "../../auth/AuthPorvider";
import { useEffect } from "react";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const user = await getUserByUserName(updates.username);

  if (!user) return { message: "Usurio no encontrado", state: false };
  const passwordOk = user.password == updates.password;
  if (!passwordOk) return { message: "Contrasña incorrecta", state: false };
  const { password, ...newUser } = user;

  console.log("Credenciales correctas");

  return { state: true, user: newUser };
}

export default function Login() {
  const action = useActionData();
  const { changeUser, changeAuthenticat } = useAuth();

  useEffect(() => {
    if (action) {
      if (action.state) {
        let newUser = action ? action.user : false;
        if (newUser) {
          changeUser(newUser);
          changeAuthenticat();
        }
      }
    }
  }, [action]);

  return (
    <Form
      method="post"
      className="bg-body-secondary p-3 d-flex flex-column gap-4  align-items-center justify-content-center "
    >
      {action ? (
        <div className="p-2 border  border-danger ">
          <p className="p-0 m-0 fw-bolder text-danger">{action.message}</p>
        </div>
      ) : (
        ""
      )}
      <div className="">
        <label htmlFor="inputEmail4" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          name="username"
        />
      </div>
      <div className="">
        <label htmlFor="inputPassword4" className="form-label">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          name="password"
        />
      </div>
      <div className="w-100 ">
        <button type="submit" className="btn btn-primary w-100 ">
          Ingresar
        </button>
      </div>
    </Form>
  );
}
