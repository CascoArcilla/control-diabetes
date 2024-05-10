import { useEffect, useState } from "react";
import { getRegistros } from "../storage/registros";
import { isEqualDates } from "../functions/time";
import { useAuth } from "../auth/AuthPorvider";

export function useHome() {
  const { isRegisterGlucosa, confirmRegisterGlucosa } = useAuth();
  const [todadayRegisters, setTodadayRegisters] = useState([]);
  const [lastReisterGlucosa, setLastReisterGlucosa] = useState({});

  useEffect(() => {
    getGlucosaRegisters();
  }, []);

  const getGlucosaRegisters = async () => {
    // registros de un mock para hacer el frond
    let results = await getRegistros();
    if (results.length == 0) {
      return setTodadayRegisters([]);
    }

    // Dia actucal para usar
    const timestampToday = Date.now();

    // De los registros de glucosa obtenemos los del dia actual
    let registersToday = results.filter((register) => {
      if (isEqualDates(timestampToday, register.createdAt)) {
        return register;
      }
    });

    if (registersToday.length != 0 && !isRegisterGlucosa) {
      confirmRegisterGlucosa(!isRegisterGlucosa);
    }

    setLastReisterGlucosa(registersToday[0]);
    return setTodadayRegisters(registersToday);
  };

  return { todadayRegisters, lastReisterGlucosa };
}
