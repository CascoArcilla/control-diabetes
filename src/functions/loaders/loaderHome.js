import { isEqualDates } from "../time"
import { getRegistros, getRegistrosUser } from "../../storage/registros"

export async function homeLoader () {
    let todadayRegisters
    // registros de un mock para hacer el frond
    const results = await getRegistros()
    if (results.length == 0) {
        todadayRegisters = []
        return { todadayRegisters }
    }

    // Dia actucal para usar
    const timestampToday = Date.now()

    // De los registros de glucosa de los mocks obtenemos los del dia actual simulado
    todadayRegisters = results.filter((register) => {
        if (isEqualDates(timestampToday, register.createAt)) {
            return register
        }
    })

    return { todadayRegisters }
}