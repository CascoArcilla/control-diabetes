import { Form } from "react-router-dom";

export default function FormGlucosa() {
  return (
    <Form
      method="post"
      className="bg-body-secondary rounded  py-3 px-3  container-sm container-max-400 d-flex flex-column gap-3  align-items-center justify-content-center"
    >
      <h1 className="fw-bold ">Registra glucosa</h1>
      <div className="container-fluid p-0 ">
        <label htmlFor="input-glucosa" className="form-label fw-bold">
          Glucosa (mg/dl)
        </label>
        <input
          type="number"
          className="form-control"
          id="input-glucosa"
          name="username"
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
      <div className="container-fluid p-0 mt-2 ">
        <button type="submit" className="btn btn-primary w-100 ">
          Registrar
        </button>
      </div>
    </Form>
  );
}
