import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";

export default function DetailToday({ registersToday }) {
  const { isRegisterGlucosa, confirmRegisterGlucosa, user } = useAuth();
  let lasteRegisterGlucosa = 0;
  if (registersToday) {
    lasteRegisterGlucosa = registersToday.glucosa;
  }

  let maxCalories = "";

  if (user.calorias_esperadas) {
    maxCalories = user.calorias_esperadas;
  } else {
    maxCalories = "Indefinido";
  }

  const setConfirmGlucosa = () => {
    confirmRegisterGlucosa(!isRegisterGlucosa);
  };

  return (
    <section className="container-fluid">
      <header className="container-fluid p-0 m-0 ">
        <h3 className="text-center mt-3 fw-bold ">Información de hoy</h3>
      </header>
      <section className="container-fluid d-flex flex-column justify-content-around gap-3 ">
        <BoxDetail
          nameInfo="Glucosa Medida"
          to="glucosa"
          registerToday={isRegisterGlucosa}
          dataInfo={lasteRegisterGlucosa}
          setConfirm={setConfirmGlucosa}
          showButton={true}
        />
        <BoxDetail
          nameInfo="Calorias Ingestas"
          to="alimento"
          registerToday={true}
          dataInfo={1800}
          setConfirm={() => {
            console.log("Se registro caloria");
          }}
          showButton={true}
        />
        <BoxDetail
          nameInfo="Calorias Estimadas"
          to=""
          registerToday={true}
          dataInfo={maxCalories}
          setConfirm={() => {
            console.log("Se registro caloria");
          }}
          showButton={false}
        />
      </section>
    </section>
  );
}
