import { getUserByUserName } from "../../storage/users"

export async function loginAction ({ request }) {
    const formData = await request.formData()
    const dataFormObject = Object.fromEntries(formData)

    const user = await getUserByUserName(dataFormObject.username)
    if (!user) return { message: "Usurio no encontrado", state: false }

    const passwordOk = user.password == dataFormObject.password
    if (!passwordOk) return { message: "Contrasña incorrecta", state: false }

    const { password, ...newUser } = user
    return { state: true, user: newUser }
}