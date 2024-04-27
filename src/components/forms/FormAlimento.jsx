import { Form } from "react-router-dom";

export default function FormAlimento() {
    return (
        <Form>
            <h2>Registra alimento</h2>
            <div className="container-fluid p-0 ">
                <label htmlFor="input-alimento" className="form-label fw-bold">
                    Nombre Alimento
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="input-alimento"
                    name="username"
                    required
                />
            </div>
            <div className="container-fluid p-0 ">
                <label htmlFor="input-alimento" className="form-label fw-bold">
                    Carbohidratos 
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="input-alimento"
                    name="username"
                    required
                />
            </div>
            <div className="container-fluid p-0 ">
                <label htmlFor="input-alimento" className="form-label fw-bold">
                    Grasas 
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="input-alimento"
                    name="username"
                    required
                />
            </div>
            <div className="container-fluid p-0 ">
                <label htmlFor="input-alimento" className="form-label fw-bold">
                    Calorias 
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="input-alimento"
                    name="username"
                    required
                />
            </div>
            <div className="container-fluid p-0 ">
                <label htmlFor="input-alimento" className="form-label fw-bold">
                    Azucares 
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="input-alimento"
                    name="username"
                    required
                />
            </div>
        </Form>
    );
}