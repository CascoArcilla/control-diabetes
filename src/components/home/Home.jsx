import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../auth/AuthPorvider";

import HistorialGlucosa from "../graficos/HistorialGlucosa";
import DetailToday from "./DetailToday";

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
