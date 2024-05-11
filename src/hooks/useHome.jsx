import { useEffect, useState } from "react";
import { getRegistros } from "../storage/registros";
import { isEqualDates } from "../functions/time";
import { useAuth } from "../auth/AuthPorvider";
import { getAlimentos } from "../storage/alimentos";

export function useHome() {
  const { isRegisterGlucosa, confirmRegisterGlucosa } = useAuth();
  const [registerToday, setRegisterToday] = useState({
    registersGlucosaToday: [],
    lastReisterGlucosa: {},
  });
  const [todayAlimentos, setTodayAlimentos] = useState({
    todayRegisterAlimento: [],
    caloriesToday: 0,
  });

  useEffect(() => {
    getGlucosaRegisters();
    getAlimentosRegisters();
  }, []);

  const getAlimentosRegisters = async () => {
    // Obtner los alimentos del indexStorage
    let aliemtos = await getAlimentos();
    if (aliemtos.length == 0) return setTodayAlimentos({ ...todayAlimentos });

    const timestampToday = Date.now();

    // De los registros de glucosa obtenemos los del dia actual
    let todayRegisterAlimento = aliemtos.filter((register) => {
      if (isEqualDates(timestampToday, register.createdAt)) {
        return register;
      }
    });

    // Ontener las calorias totales del dia
    let caloriesToday = 0;

    todayRegisterAlimento.forEach((alimento) => {
      caloriesToday += alimento.calorias;
    });

    return setTodayAlimentos({ todayRegisterAlimento, caloriesToday });
  };

  const getGlucosaRegisters = async () => {
    // registros de un mock para hacer el frond
    let results = await getRegistros();
    if (results.length == 0) return setRegisterToday({ ...registerToday });

    // Dia actucal para usar
    const timestampToday = Date.now();

    // De los registros de glucosa obtenemos los del dia actual
    let registersGlucosaToday = results.filter((register) => {
      if (isEqualDates(timestampToday, register.createdAt)) {
        return register;
      }
    });

    if (registersGlucosaToday.length != 0 && !isRegisterGlucosa) {
      confirmRegisterGlucosa(!isRegisterGlucosa);
    }

    let lastReisterGlucosa = registersGlucosaToday[0];

    return setRegisterToday({ registersGlucosaToday, lastReisterGlucosa });
  };

  return { registerToday, todayAlimentos };
}
