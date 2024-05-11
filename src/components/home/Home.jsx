import { useAuth } from "../../auth/AuthPorvider";
import { useHome } from "../../hooks/useHome.jsx";

import HistorialGlucosa from "./HistorialGlucosa.jsx";
import DetailToday from "./DetailToday";

export default function Home() {
  const { user } = useAuth();
  const { registerToday, todayAlimentos } = useHome();
  const { registersGlucosaToday, lastReisterGlucosa } = registerToday;

  const { todayRegisterAlimento, caloriesToday } = todayAlimentos;
  console.log(caloriesToday);

  return (
    <section className="container-sm d-flex flex-column flex-grow-1 p-0">
      <h1 className="text-center">
        Bienvenido{" "}
        <span className="text-capitalize ">{user.nombre ?? "No name"}</span>
      </h1>
      <DetailToday registersToday={lastReisterGlucosa} />
      <HistorialGlucosa todayGlucosa={registersGlucosaToday} />
    </section>
  );
}
