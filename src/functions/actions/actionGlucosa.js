import { createRegistro } from "../../storage/registros"

export async function glucosaAction ({ request }) {
    const formData = await request.formData()
    const dataGlucosa = Object.fromEntries(formData)
    const newGlucosa = await createRegistro(dataGlucosa)

    if (!newGlucosa) {
        return { message: "Ha ocurrido un error" }
    }

    return { message: "Ok", state: true }
}