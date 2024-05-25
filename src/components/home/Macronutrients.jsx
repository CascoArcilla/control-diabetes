import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";

export default function Macronutrients() {
  const { user } = useAuth();
  const { macronutrientes } = user;

  return (
    <section className="container-fluid p-0 m-0">
      <p className="text-center fw-bold fs-5 ">Macronutrientes estimados</p>
      <div className="d-flex gap-1">
        <BoxDetail
          className="flex-grow-1 "
          nameInfo="Carbohidratos"
          dataInfo={`0/${macronutrientes.carbo ?? 0}g`}
          registerToday={true}
        />
        <div className="d-flex flex-column flex-grow-1 gap-1 ">
          <BoxDetail
            nameInfo="Proteinas"
            dataInfo={`0/${macronutrientes.prote ?? 0}g`}
            registerToday={true}
          />
          <BoxDetail
            nameInfo="Grasas"
            dataInfo={`0/${macronutrientes.grasas ?? 0}g`}
            registerToday={true}
          />
        </div>
      </div>
    </section>
  );
}
