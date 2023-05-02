function generar_tabla() {
  let tabla = document.createElement("table");
  for (let i = 1; i <= 3; i++) {
    let fila = document.createElement("tr");
    for (let j = 1; j <= 3; j++) {
      let celda = document.createElement("td");
      celda.innerHTML = "Celda " + i + ", Columna " + j;
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  document.getElementById("tabla").appendChild(tabla);
}