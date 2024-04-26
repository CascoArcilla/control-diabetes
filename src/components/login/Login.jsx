import { Form, useActionData } from "react-router-dom";
import { getUserByUserName, getUsers, createUser } from "../../storage/users";
import { useAuth } from "../../auth/AuthPorvider";
import { useEffect } from "react";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  if (updates.nombre) {
    let users = await getUsers();
    let userEqual = users.find((user) => user.username == updates.username);
    if (userEqual)
      return { message: "Ya existe un usuario con ese Username", state: false };

    let passwordsEqueal = updates.password == updates.verifyPassword;
    if (!passwordsEqueal)
      return { message: "Contraseñas no coinciden", state: false };

    const { verifyPassword, ...newDataUser } = updates;

    let user = await createUser(newDataUser);

    return { message: "Ok", state: true };
  } else {
    const user = await getUserByUserName(updates.username);

    if (!user) return { message: "Usurio no encontrado", state: false };
    const passwordOk = user.password == updates.password;
    if (!passwordOk) return { message: "Contrasña incorrecta", state: false };
    const { password, ...newUser } = user;
    return { state: true, user: newUser };
  }
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
      className="bg-body-secondary rounded  p-3 container-sm container-max-400 d-flex flex-column gap-4  align-items-center justify-content-center "
    >
      <h1 className="fw-bolder ">Login</h1>
      {action ? (
        <div className="p-2 border  border-danger ">
          <p className="p-0 m-0 fw-bolder text-danger">{action.message}</p>
        </div>
      ) : (
        ""
      )}
      <div className="container-fluid ">
        <label htmlFor="inputEmail4" className="form-label fw-bold ">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          name="username"
        />
      </div>
      <div className="container-fluid ">
        <label htmlFor="inputPassword4" className="form-label fw-bold ">
          Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          name="password"
        />
      </div>
      <div className="container-fluid ">
        <button type="submit" className="btn btn-primary w-100 fw-bold ">
          Ingresar
        </button>
      </div>
    </Form>
  );
}
