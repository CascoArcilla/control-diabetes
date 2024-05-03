import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";

export default function DetailToday({ registers }) {
  const { isRegisterGlucosa, confirmRegisterGlucosa } = useAuth();
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
      confirmRegisterGlucosa();
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
        register={isRegisterGlucosa}
        info={datasToday.glucosa}
      />
      <BoxDetail dato="calorias" register={false} info={datasToday.calorias} />
    </div>
  );
}
