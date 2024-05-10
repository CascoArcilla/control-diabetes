import { getTimeHoursMinutes } from "../../functions/time";
import GraphicBar from "../graphics/GraphicBar";

const colorsDefault = {
  normal: "rgba(75, 192, 192, 0.6)",
  precausion: "rgba(255, 128, 0, 0.6)",
  alta: "rgba(255, 99, 132, 0.6)",
};

export default function HistorialGlucosa({ todayGlucosa }) {
  const dataGlucosa = [];
  const dataTime = [];
  const dataColors = [];

  if (todayGlucosa) {
    todayGlucosa.forEach((registro) => {
      dataGlucosa.push(registro.glucosa);

      let timeHours = getTimeHoursMinutes(registro.createdAt);
      dataTime.push([timeHours, registro.glucosa]);

      if (registro.glucosa <= 180 && registro.glucosa >= 100) {
        dataColors.push(colorsDefault["precausion"]);
      } else if (registro.glucosa > 180) {
        dataColors.push(colorsDefault["alta"]);
      } else {
        dataColors.push(colorsDefault["normal"]);
      }
    });
  }

  dataGlucosa.reverse();
  dataTime.reverse();
  dataColors.reverse();

  return (
    <section className="container-fluid text-center pb-2 mt-4 d-flex flex-column flex-grow-1 p-0">
      <h3 className="">Registros de glucosa hoy</h3>
      <article className="container-fluid flex-grow-1 d-flex flex-column p-0 ">
        <GraphicBar
          registersGlucosa={todayGlucosa ? dataGlucosa : null}
          timeAtMetric={todayGlucosa ? dataTime : null}
          colors={todayGlucosa ? dataColors : null}
        />
      </article>
    </section>
  );
}
