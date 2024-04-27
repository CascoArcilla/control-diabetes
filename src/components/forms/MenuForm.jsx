import { Link } from "react-router-dom";

export default function MenuForm() {
  return (
    <>
      <h2>¿Que deseas registrar?</h2>
      <ul>
        <li>
          <Link to="/registro/glucosa">Glucosa</Link>
        </li>
      </ul>
    </>
  );
}
