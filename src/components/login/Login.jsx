import { Form, useActionData } from "react-router-dom";
import { getUserByUserName } from "../../storage/users";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const user = await getUserByUserName(updates.username);

  if (!user) return { message: "Usurio no encontrado" };
  const passwordOk = user.password == updates.password;
  if (!passwordOk) return { message: "Contrasña incorrecta" };
  const { password, ...newUser } = user;

  console.log("Credenciales correctas");
  console.log(newUser);

  return { state: true };
}

export default function Login() {
  const error = useActionData();

  return (
    <Form
      method="post"
      className="bg-body-secondary p-3 d-flex flex-column gap-4  align-items-center justify-content-center "
    >
      {error ? (
        <div className="p-2 border  border-danger ">
          <p className="p-0 m-0 fw-bolder text-danger">{error.message}</p>
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
