import { PORCETAJES_CARBIHIDRATOS, PORCETAJES_GRASAS, PORCETAJES_PROTEINAS } from "../../constants/porcentajesMacro.js"
import { getPorcetajeMacro, getGramosMacro } from "./porcentaje_gramos.js"


export function getCarbos (calorias_diarias, actividad) {
    let porcentajeCarbo = getPorcetajeMacro(actividad, PORCETAJES_CARBIHIDRATOS)
    const gramosCarbohidratos = getGramosMacro(calorias_diarias, porcentajeCarbo)
    return gramosCarbohidratos
}

export function getProteinas (calorias_diarias, actividad) {
    let porcentajeCarbo = getPorcetajeMacro(actividad, PORCETAJES_PROTEINAS)
    const gramosCarbohidratos = getGramosMacro(calorias_diarias, porcentajeCarbo)
    return gramosCarbohidratos
}

export function getGrasas (calorias_diarias, actividad) {
    let porcentajeCarbo = getPorcetajeMacro(actividad, PORCETAJES_GRASAS)
    const gramosCarbohidratos = getGramosMacro(calorias_diarias, porcentajeCarbo)
    return gramosCarbohidratos
}

export function getMacroNutrientes (calorias_diarias, actividad) {
    const proteinas = Math.floor(getProteinas(calorias_diarias, actividad))
    const carbohidratos = Math.floor(getCarbos(calorias_diarias, actividad))
    const grasas = Math.floor(getGrasas(calorias_diarias, actividad))

    const macroNuntri = { carbo: carbohidratos, prote: proteinas, grasas: grasas }

    return macroNuntri
}