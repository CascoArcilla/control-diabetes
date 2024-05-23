import BoxDetail from "./BoxDetail";

export default function RegistersToday({
  isRegisterGlucosa,
  lasteRegisterGlucosa,
  setConfirmGlucosa,
  caloriesToday,
}) {
  return (
    <section className="container-fluid m-0 p-0 d-flex gap-1 ">
      <BoxDetail
        nameInfo="Glucosa"
        to="glucosa"
        registerToday={isRegisterGlucosa}
        dataInfo={lasteRegisterGlucosa}
        setConfirm={setConfirmGlucosa}
        showButton={true}
        isVertical={true}
      />
      <BoxDetail
        nameInfo="Calorias"
        to="alimento"
        registerToday={caloriesToday != 0}
        dataInfo={caloriesToday}
        showButton={true}
        isVertical={true}
      />
    </section>
  );
}
