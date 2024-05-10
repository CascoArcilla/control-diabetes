// Función para calcular las calorías necesarias para una persona con diabetes tipo 1
export function calcularCaloriasDiabetesTipo1 (peso, altura, edad, sexo, actividad) {
    // Fórmula de Harris-Benedict modificada para diabetes tipo 1
    // Hombres: TMB = 88.362 + (13.397 * peso en kg) + (4.799 * altura en cm) - (5.677 * edad en años)
    // Mujeres: TMB = 447.593 + (9.247 * peso en kg) + (3.098 * altura en cm) - (4.330 * edad en años)
    // Ajuste para actividad física: TMB * factor de actividad

    let tmb

    // Calculando TMB
    if (sexo === "hombre") {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad)
    } else {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad)
    }

    // Factor de actividad (1.2 sedentario, 1.375 ligero, 1.55 moderado, 1.725 activo, 1.9 muy activo)
    const factoresActividad = {
        "sedentario": 1.2,
        "ligero": 1.375,
        "moderado": 1.55,
        "activo": 1.725,
        "muy_activo": 1.9
    }

    const factorActividad = factoresActividad[actividad]

    // Calorías necesarias
    let calorias = tmb * factorActividad
    calorias = Math.floor(calorias)

    return calorias
}

// Ejemplo de uso
// const peso = 70 // en kg
// const altura = 160 // en cm
// const edad = 30 // en años
// const sexo = "hombre" // o "mujer"
// const actividad = "moderado" // nivel de actividad física

// const caloriasNecesarias = calcularCaloriasDiabetesTipo1(peso, altura, edad, actividad)
// console.log("Calorías necesarias:", Math.floor(caloriasNecesarias))
