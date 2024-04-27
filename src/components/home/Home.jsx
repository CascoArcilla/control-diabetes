import { useAuth } from "../../auth/AuthPorvider";
import HistorialGlucosa from "../graficos/HistorialGlucosa";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-center">
        Bienvenido <span className="text-capitalize  ">{user.nombre}</span>
      </h1>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Una app web para llevar un control de la dibates</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Hecho por <cite title="Source Title">Alumnos</cite>
        </figcaption>
      </figure>
      <HistorialGlucosa />
    </>
  );
}
