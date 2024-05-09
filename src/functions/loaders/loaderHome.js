import { isEqualDates } from "../functions/time"
import { getRegistrosM } from "../storage/registros"

export async function homeLoader ({ params }) {
    // registros de un mock para hacer el frond
    const results = getRegistrosM()

    // Simulamos el dia actucal para usar los mocks
    const timestampToday = 1713551346585

    // De los registros de glucosa de los mocks obtenemos los del dia actual simulado
    const todadayRegisters = results.filter((register) => {
        if (isEqualDates(timestampToday, register.fecha)) {
            return register
        }
    })

    return { todadayRegisters }
}