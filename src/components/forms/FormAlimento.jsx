import { Form, Link, Navigate, useActionData } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";

export default function FormAlimento() {
  const action = useActionData();
  const { user } = useAuth();

  if (action) {
    if (action.message == "ok" && action.state) {
      return <Navigate to="/" />;
    }
  }

  return (
    <Form
      method="post"
      className="bg-body-secondary rounded  py-3 px-3  container-sm container-max-400 d-flex flex-column gap-3  align-items-center justify-content-center"
    >
      <h2>Registra alimento</h2>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-alimento" className="form-label fw-bold m-0 p-0 ">
          Nombre Alimento
        </label>
        <input
          type="text"
          className="form-control"
          id="input-alimento"
          name="alimento"
          required
        />
      </div>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-calorias" className="form-label fw-bold m-0 p-0 ">
          Calorias (kcal)
        </label>
        <input
          type="number"
          className="form-control"
          id="input-calorias"
          name="calorias"
          required
        />
      </div>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-carbo" className="form-label fw-bold m-0 p-0 ">
          Carbohidratos (g)
        </label>
        <input
          type="number"
          className="form-control"
          id="input-carbo"
          name="carbohidrato"
          required
        />
      </div>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-grasas" className="form-label fw-bold m-0 p-0 ">
          Grasas (g)
        </label>
        <input
          type="number"
          className="form-control"
          id="input-grasas"
          name="grasas"
          required
        />
      </div>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-azucar" className="form-label fw-bold m-0 p-0 ">
          Azucares (g)
        </label>
        <input
          type="number"
          className="form-control"
          id="input-azucar"
          name="azucar"
          required
        />
      </div>
      <input
        className="d-none"
        type="text"
        value={user.id}
        name="iduser"
        readOnly
      />
      <div className="container-fluid p-0 mt-2 ">
        <button type="submit" className="btn btn-primary w-100 fw-bold ">
          Registra alimento
        </button>
      </div>
      <div className="container-fluid p-0 mt-2 ">
        <Link className="btn btn-danger w-100 " to="/registro">
          Cancelar
        </Link>
      </div>
    </Form>
  );
}
