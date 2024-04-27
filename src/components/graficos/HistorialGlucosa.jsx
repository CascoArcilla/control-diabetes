import { getRegistrosM } from "../../storage/registros";

export default function HistorialGlucosa() {
  const results = getRegistrosM();
  const finalFive = results.slice(1, 5);

  return (
    <div className="container-fluid text-center pb-2 ">
      <h3>Ultimos registros</h3>
      <div className="d-flex flex-column gap-2 ">
        {finalFive.map((registro) => {
          return (
            <div
              key={`${registro.nivelGlucosa}${registro.nivelInsulina}`}
              className="text-start border border-2 border-black p-1 rounded "
              style={{ fontSize: "14px" }}
            >
              <p className="m-0 ">Fecha: {registro.fecha}</p>
              <p className="m-0 ">Nivel glucosa: {registro.nivelGlucosa}</p>
              <p className="m-0 ">
                Nivel de insulina: {registro.nivelInsulina}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
