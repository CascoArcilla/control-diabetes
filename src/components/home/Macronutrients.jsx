import BoxDetail from "./BoxDetail";

export default function Macronutrients({ infoMacro }) {
  return (
    <section className="container-fluid p-0 m-0">
      <p className="text-center fw-bold fs-5 ">Macronutrientes estimados</p>
      <div className="d-flex gap-1">
        <BoxDetail
          className="flex-grow-1 "
          nameInfo="Carbohidratos"
          dataInfo={`${infoMacro.carbo}g`}
          registerToday={true}
        />
        <div className="d-flex flex-column flex-grow-1 gap-1 ">
          <BoxDetail
            nameInfo="Proteinas"
            dataInfo={`${infoMacro.prote}g`}
            registerToday={true}
          />
          <BoxDetail
            nameInfo="Grasas"
            dataInfo={`${infoMacro.grasas}g`}
            registerToday={true}
          />
        </div>
      </div>
    </section>
  );
}
