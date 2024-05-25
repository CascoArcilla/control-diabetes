import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";

export default function Macronutrients({ macroToday }) {
  const { user } = useAuth();
  const { macronutrientes } = user;
  let carboToday = 0;
  let proteToday = 0;
  let grasasToday = 0;

  if (macroToday.carbohidratos) {
    carboToday = macroToday.carbohidratos;
  }
  if (macroToday.proteinas) {
    proteToday = macroToday.proteinas;
  }
  if (macroToday.grasa) {
    grasasToday = macroToday.grasa;
  }

  return (
    <section className="container-fluid p-0 m-0">
      <p className="text-center fw-bold fs-5 ">Macronutrientes estimados</p>
      <div className="d-flex gap-1">
        <BoxDetail
          className="flex-grow-1 "
          nameInfo="Carbohidratos"
          dataInfo={`${carboToday}/${macronutrientes.carbo ?? 0}g`}
          registerToday={true}
        />
        <div className="d-flex flex-column flex-grow-1 gap-1 ">
          <BoxDetail
            nameInfo="Proteinas"
            dataInfo={`${proteToday}/${macronutrientes.prote ?? 0}g`}
            registerToday={true}
          />
          <BoxDetail
            nameInfo="Grasas"
            dataInfo={`${grasasToday}/${macronutrientes.grasas ?? 0}g`}
            registerToday={true}
          />
        </div>
      </div>
    </section>
  );
}
