export function getTimeDate(timestamp) {
  let fechas = new Date(timestamp);
  const anio = fechas.getFullYear();
  const mes = (fechas.getMonth() + 1).toString().padStart(2, "0");
  const dia = fechas.getDate().toString().padStart(2, "0");
  const fechaFormateada = `${anio}-${mes}-${dia}`;
  return fechaFormateada;
}
