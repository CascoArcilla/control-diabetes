import { Form, Navigate, useActionData } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";
import { createRegistro } from "../../storage/registros";

export async function action({ request, params }) {
  const formData = await request.formData();
  const dataGlucosa = Object.fromEntries(formData);
  const newGlucosa = await createRegistro(dataGlucosa);

  if (!newGlucosa) {
    return { message: "Ha ocurrido un error" };
  }

  return { message: "Ok", state: true };
}

export default function FormGlucosa() {
  const action = useActionData();
  const { user } = useAuth();

  if (action) {
    if (action.message == "Ok" && action.state) {
      return <Navigate to="/" />;
    }
  }

  return (
    <Form
      method="post"
      className="bg-body-secondary rounded  py-3 px-3  container-sm container-max-400 d-flex flex-column gap-3  align-items-center justify-content-center"
    >
      <h1 className="fw-bold ">Registra glucosa</h1>
      {action && (
        <div className="p-2 border  border-danger ">
          <p className="p-0 m-0 fw-bolder text-danger">{action.message}</p>
        </div>
      )}
      <div className="container-fluid p-0 ">
        <label htmlFor="input-glucosa" className="form-label fw-bold">
          Glucosa (mg/dl)
        </label>
        <input
          type="number"
          className="form-control"
          id="input-glucosa"
          name="glucosa"
          required
        />
      </div>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-ayuno" className="form-label fw-bold">
          ¿Se encuetra en ayuno?
        </label>
        <select name="ayuno" id="input-ayuno" className="form-select" required>
          <option value="no">No</option>
          <option value="si">Si</option>
        </select>
      </div>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-comentario" className="form-label fw-bold">
          Comentario(opcional/letras 100)
        </label>
        <input
          type="text"
          className="form-control "
          id="input-comentario"
          maxLength="100"
        />
      </div>
      <input
        type="text"
        value={user.id}
        name="iduser"
        className="d-none"
        readOnly
      />
      <div className="container-fluid p-0 mt-2 ">
        <button type="submit" className="btn btn-primary w-100 ">
          Registrar
        </button>
      </div>
    </Form>
  );
}
