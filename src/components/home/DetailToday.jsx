import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthPorvider";
import BoxDetail from "./BoxDetail";

export default function DetailToday({ registersToday }) {
  const { isRegisterGlucosa, confirmRegisterGlucosa } = useAuth();
  const [glucosaToday, setGlucosaToday] = useState(0);

  useEffect(() => {
    // comprobamos si hay registros de glucosa hoy, si hay confimamos que existen
    if (registersToday) {
      confirmRegisterGlucosa();
      
      // aqui se debe igualar el nivel de glucosa actual
      let newDataToday = registersToday[0].nivelGlucosa;

      setGlucosaToday(newDataToday);
    }
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-around gap-3 ">
      <BoxDetail
        nameInfo="Glucosa"
        registerToday={isRegisterGlucosa}
        dataInfo={glucosaToday}
      />
    </div>
  );
}
