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
  const [macronutrientesToday, setMacronutrientesToday] = useState({
    carbohidratos: 0,
    proteinas: 0,
    grasa: 0,
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

    // Ontener las calorias y macronutrientes totales del dia
    let caloriesToday = 0;
    let carbo = 0;
    let prote = 0;
    let grasas = 0;

    todayRegisterAlimento.forEach((alimento) => {
      caloriesToday += parseInt(alimento.calorias, 10);
      carbo += parseInt(alimento.carbohidrato, 10);
      prote += parseInt(alimento.proteinas, 10);
      grasas += parseInt(alimento.grasas, 10);
    });

    setTodayAlimentos({ todayRegisterAlimento, caloriesToday });
    setMacronutrientesToday({
      carbohidratos: carbo,
      proteinas: prote,
      grasa: grasas,
    });
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

  return { registerToday, todayAlimentos, macronutrientesToday };
}
