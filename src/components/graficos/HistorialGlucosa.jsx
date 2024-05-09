import { getTimeDate, getTimeHoursMinutes } from "../../functions/time";

export default function HistorialGlucosa({ todayGlucosa }) {
  return (
    <div className="container-fluid text-center pb-2 mt-4">
      <h3>Registros hoy</h3>
      <div className="d-flex flex-column gap-2 ">
        {todayGlucosa.map((registro) => {
          return (
            <div
              key={`${registro.glucosa}${registro.createdAt}`}
              className="text-start border border-2 border-black p-1 rounded "
              style={{ fontSize: "14px" }}
            >
              <p className="m-0 ">Fecha: {getTimeDate(registro.createdAt)}</p>
              <p className="m-0 ">
                Hora: {`${getTimeHoursMinutes(registro.createdAt)} Hrs`}
              </p>
              <p className="m-0 ">Nivel glucosa: {registro.glucosa}</p>
              <p className="m-0 ">Ayuno: {registro.ayuno}</p>
              <p className="m-0 ">Nivel de insulina: Aun no definido</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
