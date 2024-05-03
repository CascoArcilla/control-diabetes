import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";
import { getRegistrosM } from "../../storage/registros";
import { isEqualDates } from "../../functions/time";

import HistorialGlucosa from "../graficos/HistorialGlucosa";
import DetailToday from "./DetailToday";

export async function loader({ params }) {
  // registros de un mock para hacer el frond
  const results = getRegistrosM();

  // Simulamos el dia actucal para usar los mocks
  const timestampToday = 1713551346585;

  // De los registros de glucosa de los mocks obtenemos los del dia actual simulado
  const todadayRegisters = results.filter((register) => {
    if (isEqualDates(timestampToday, register.fecha)) {
      return register;
    }
  });

  return { todadayRegisters };
}

export default function Home() {
  const { user } = useAuth();
  const { todadayRegisters } = useLoaderData();

  return (
    <div className="container-sm d-flex flex-column ">
      <h1 className="text-center">
        Bienvenido{" "}
        <span className="text-capitalize ">{user.nombre ?? "No name"}</span>
      </h1>
      <h3 className="text-center mt-3 fw-bold ">Tus metricas de hoy</h3>
      <DetailToday registersToday={todadayRegisters} />
      <HistorialGlucosa todayGlucosa={todadayRegisters} />
    </div>
  );
}
