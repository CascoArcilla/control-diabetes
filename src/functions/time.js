export function getTimeDate (timestamp) {
  let fechas = new Date(timestamp)
  const anio = fechas.getFullYear()
  const mes = (fechas.getMonth() + 1).toString().padStart(2, "0")
  const dia = fechas.getDate().toString().padStart(2, "0")
  const fechaFormateada = `${anio}-${mes}-${dia}`
  return fechaFormateada
}

export function getTimeHours (timestamp) {
  let time = new Date(timestamp)
  let hours = time.getHours()
  return hours
}

export function getTimeHoursMinutes (timestamp) {
  let time = new Date(timestamp)
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let finalMinutes = minutes.toString().length == 1 ? `0${minutes}` : minutes
  return `${hours}:${finalMinutes}`
}

export function isEqualDates (timestamp_1, timestamp_2) {
  let date_1 = new Date(timestamp_1)
  let date_2 = new Date(timestamp_2)

  if (date_1.getFullYear() == date_2.getFullYear()) {
    if (date_1.getMonth() == date_2.getMonth()) {
      if (date_1.getDate() == date_2.getDate()) {
        return true
      }
    }
  } else {
    return false
  }
}