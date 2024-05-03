import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { useAuth } from "../../auth/AuthPorvider";

export default function DetailToday({ registers }) {
  const { registerGlucosaToday, registerGlucosa } = useAuth();
  const [datasToday, setDatasToday] = useState({
    glucosa: 0,
    calorias: 0,
  });

  useEffect(() => {
    let dataToday = registers.filter((register) => {
      let registerFecha = new Date(register.fecha);
      let timestamp = Date.now();
      let fechaNow = new Date(timestamp);

      if (registerFecha.getFullYear() == fechaNow.getFullYear()) {
        if (registerFecha.getMonth() == fechaNow.getMonth()) {
          if (registerFecha.getDate() == fechaNow.getDate()) {
            return register;
          }
        }
      }
    });

    if (dataToday) {
      registerGlucosa();
      let newDataToday = {
        glucosa: 120,
        calorias: 315,
      };

      setDatasToday(newDataToday);
    }
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-around gap-3 ">
      <BoxDetail
        dato="Glucosa"
        register={registerGlucosaToday}
        info={datasToday.glucosa}
      />
      <BoxDetail dato="calorias" register={true} info={datasToday.calorias} />
    </div>
  );
}

function BoxDetail({ dato, register, info }) {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="d-flex flex-column text-center border p-2 rounded align-items-center ">
      <p className="m-0 text-capitalize ">{dato}</p>
      {isRegister ? (
        <p className="m-0 ">{info}</p>
      ) : (
        <FaPencil style={{ fontSize: "20px" }} />
      )}
    </div>
  );
}
