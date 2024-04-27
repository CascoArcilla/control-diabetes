import { Link } from "react-router-dom";

export default function MenuForm() {
  return (
    <div className="container-sm flex-grow-1 d-flex flex-column ">
      <h1 className="text-center">¿Que deseas registrar?</h1>
      <div className="d-flex flex-column gap-2 flex-grow-1 text-center text-black mt-4 ">
        <Link to="/registro/glucosa" className="boton-menu-form ">
          Glucosa
        </Link>
        <Link to="/registro/alimento" className="boton-menu-form ">
          Alimento
        </Link>
      </div>
    </div>
  );
}
