import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";
import Macronutrients from "./Macronutrients";
import RegistersToday from "./RegistersToday";

export default function DetailToday({ registersGlucosaToday, caloriesToday }) {
  const { isRegisterGlucosa, confirmRegisterGlucosa, user } = useAuth();
  let lasteRegisterGlucosa = 0;
  if (registersGlucosaToday) {
    lasteRegisterGlucosa = registersGlucosaToday.glucosa;
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
        <h3 className="text-center my-3 fw-bold ">Información de hoy</h3>
      </header>
      <section className="container-fluid d-flex flex-column justify-content-around gap-3 ">
        <RegistersToday
          caloriesToday={caloriesToday}
          isRegisterGlucosa={isRegisterGlucosa}
          lasteRegisterGlucosa={lasteRegisterGlucosa}
          setConfirmGlucosa={setConfirmGlucosa}
        />

        <BoxDetail
          nameInfo="Calorias Estimadas"
          registerToday={true}
          dataInfo={maxCalories}
          showButton={false}
        />

        <Macronutrients />
      </section>
    </section>
  );
}
