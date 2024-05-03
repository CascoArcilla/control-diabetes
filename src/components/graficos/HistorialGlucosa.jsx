import { getTimeDate } from "../../assets/functions/getTimeFormater";

export default function HistorialGlucosa({ todayGlucosa }) {
  return (
    <div className="container-fluid text-center pb-2 mt-4">
      <h3>Registros hoy</h3>
      <div className="d-flex flex-column gap-2 ">
        {todayGlucosa.map((registro) => {
          return (
            <div
              key={`${registro.nivelGlucosa}${registro.nivelInsulina}`}
              className="text-start border border-2 border-black p-1 rounded "
              style={{ fontSize: "14px" }}
            >
              <p className="m-0 ">Fecha: {getTimeDate(registro.fecha)}</p>
              <p className="m-0 ">Hora: {getTimeHours(registro.fecha)}</p>
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

function getTimeHours(timestamp) {
  let time = new Date(timestamp);
  let hours = time.getHours();
  return hours;
}
