import { TIPO_ACTIVIDAD } from "../../constants/actividad.js"
import { GRAMO_POR_CALORIA } from "../../constants/porcentajesMacro.js"

export function getPorcetajeMacro (actividad, PORCETAJES) {
    let porcentaje = 0

    switch (actividad) {
        case TIPO_ACTIVIDAD.SEDENTARIO:
            porcentaje = PORCETAJES[0]
            break

        case TIPO_ACTIVIDAD.LIGERO:
            porcentaje = PORCETAJES[1]
            break

        case TIPO_ACTIVIDAD.ACTIVO:
            porcentaje = PORCETAJES[2]
            break

        case TIPO_ACTIVIDAD.MUY_ACTIVO:
            porcentaje = PORCETAJES[3]
            break

        default:
            porcentaje = PORCETAJES[0]
            break
    }

    return porcentaje
}

export function getGramosMacro (calorias, porcentaje) {
    const caloriasCarbohidratos = calorias * porcentaje
    const gramosPorMacro = caloriasCarbohidratos / GRAMO_POR_CALORIA
    return gramosPorMacro
}