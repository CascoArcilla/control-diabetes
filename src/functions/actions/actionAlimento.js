import { createAlimento } from "../../storage/alimentos"

export async function alimentoAction ({ request }) {
    const formData = await request.formData()
    const dataAlimento = Object.fromEntries(formData)

    const newDataAlimeto = await createAlimento(dataAlimento)

    if (!newDataAlimeto) {
        return { message: "Ah ocurrido un error", state: false }
    }

    return { message: "ok", state: true }
}