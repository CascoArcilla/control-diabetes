import { createUser, getUsers } from "../../storage/users"

export async function signUpAction ({ request }) {
    const formData = await request.formData()
    const dataFormObject = Object.fromEntries(formData)

    let users = await getUsers()
    let userEqual = users.find(
        (user) => user.username == dataFormObject.username
    )
    if (userEqual)
        return { message: "Ya existe un usuario con ese Username", state: false }

    let passwordsEqueal =
        dataFormObject.password == dataFormObject.verifyPassword
    if (!passwordsEqueal)
        return { message: "Contraseñas no coinciden", state: false }

    const { verifyPassword, ...newDataUser } = dataFormObject

    await createUser(newDataUser)

    return { message: "Ok", state: true }
}