import { useAuth } from "../../auth/AuthPorvider";

export default function Perfil() {
  const { user } = useAuth();

  const nop = "indefinido";

  const nombre = user.nombre ? user.nombre : nop;
  const apellido = user.apellido ? user.apellido : nop;
  const edad = user.edad ? user.edad : nop;
  const altura = user.altura ? user.altura : nop;
  const peso = user.peso ? user.peso : nop;
  const userName = user.username ? user.username : nop;
  const tipoDiabetes = user.tipoDiabetes ? user.tipoDiabetes : nop;

  return (
    <div className="container-sm d-flex flex-column gap-4 ">
      <div className="container-fluid ">
        <h3 className="text-capitalize text-center">{`${nombre} ${apellido}`}</h3>
      </div>

      <div className="d-flex flex-column container-fluid gap-2 text-center ">
        <p className="fw-bold">Metricas de usario</p>
        <div className="d-flex gap-2 ">
          <div className="d-flex flex-column border flex-grow-1">
            <p className="m-0 p-0 ">Edad</p>
            <p className="m-0 p-0 ">{edad}</p>
            <p className="m-0 p-0 ">años</p>
          </div>
          <div className="d-flex flex-column border flex-grow-1">
            <p className="m-0 p-0 ">Altura</p>
            <p className="m-0 p-0 ">{altura}</p>
            <p className="m-0 p-0 ">cm</p>
          </div>
          <div className="d-flex flex-column border flex-grow-1">
            <p className="m-0 p-0 ">Peso</p>
            <p className="m-0 p-0 ">{peso}</p>
            <p className="m-0 p-0 ">kg</p>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center">
        <p className="m-0 p-0 fw-bold ">Nombre de usario</p>
        <p className="m-0 p-0 fw-bold ">{userName}</p>
      </div>

      <div className="container-fluid text-center fw-bold ">
        <p className="p-0 m-0 ">Tipo de diabetes</p>
        <p className="p-0 m-0 ">{tipoDiabetes}</p>
      </div>
    </div>
  );
}
