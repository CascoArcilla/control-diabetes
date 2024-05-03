import { useAuth } from "../../auth/AuthPorvider";
import { getRegistrosM } from "../../storage/registros";
import HistorialGlucosa from "../graficos/HistorialGlucosa";
import DetailToday from "./DetailToday";

export default function Home() {
  const { user } = useAuth();
  const results = getRegistrosM();
  const timestampToday = 1713551346585;
  const dateToday = new Date(timestampToday);
  const todadayRegisters = results.filter((register) => {
    let registerDate = new Date(register.fecha);
    if (registerDate.getFullYear() == dateToday.getFullYear()) {
      if (registerDate.getMonth() == dateToday.getMonth()) {
        if (registerDate.getDate() == dateToday.getDate()) {
          return register;
        }
      }
    }
  });

  return (
    <div className="container-sm d-flex flex-column ">
      <h1 className="text-center">
        Bienvenido <span className="text-capitalize  ">{user.nombre}</span>
      </h1>
      <p className="text-center mt-3 fw-bold ">Tus metricas de hoy</p>
      <DetailToday registers={results} />
      <HistorialGlucosa todayGlucosa={todadayRegisters} />
    </div>
  );
}
