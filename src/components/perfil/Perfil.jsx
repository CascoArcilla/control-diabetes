import { useAuth } from "../../auth/AuthPorvider";
import Metric from "./Metric";

export default function Perfil() {
  const { user } = useAuth();

  const nop = "indefinido";

  const nombre = user.nombre ? user.nombre : nop;
  const apellido = user.apellido ? user.apellido : nop;
  const edad = user.edad ? user.edad : nop;
  const altura = user.altura ? user.altura : nop;
  const peso = user.peso ? user.peso : nop;
  const userName = user.username ? user.username : nop;
  const tipoDiabetes = user.tipo_diabetes ? user.tipo_diabetes : nop;
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  return (
    <div className="container-sm d-flex flex-column gap-4 ">
      <div className="container-fluid ">
        <h3 className="text-capitalize text-center fw-bold fs-1 ">{`${nombre} ${apellido}`}</h3>
      </div>

      <hr className="p-0 m-0 " />

      <div className="d-flex flex-column container-fluid gap-2 text-center ">
        <p className="fw-bold fs-2 ">Metricas de usario</p>
        <div className="d-flex gap-2 ">
          <Metric value={edad} nameMetric={`Edad`} unidMetric={`años`} />
          <Metric
            value={altura}
            nameMetric={`Altura`}
            unidMetric={`cm`}
            isModify={true}
          />
        </div>
        <div className="d-flex gap-2 ">
          <Metric
            value={peso}
            nameMetric={`Peso`}
            unidMetric={`kg`}
            isModify={true}
          />
          <Metric value={imc} nameMetric={`IMC`} unidMetric={``} />
        </div>
      </div>

      <hr />

      <div className="container-fluid text-center">
        <p className="m-0 p-0 fw-bold fs-2 ">Nombre de usario</p>
        <p className="m-0 p-0 fs-4 fst-italic ">{userName}</p>
      </div>

      <div className="container-fluid text-center ">
        <p className="p-0 m-0 fw-bold fs-2 ">Diabetes</p>
        <p className="p-0 m-0 fs-4 fst-italic ">{`Tipo ${tipoDiabetes}`}</p>
      </div>
    </div>
  );
}
