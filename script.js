let contador;

let precio;
let precioFinal;
function InicarDatos() {
  contador = 1;

  precio = 580000;
  CambiarValoresNumericos();
  console.log("Inicia Scipts");
}

function CambiarValoresNumericos() {
  casillaCantidad = document.querySelector("#CantidadNot").innerHTML = contador;

  precioFinal = contador * precio;
  casillaPrecio = document.getElementById("PrecioFinal").innerHTML =
    "$ " + precioFinal;
}
function cambiarContadorUP() {
  contador = contador + 1;
  if (contador > 10) {
    contador = 10;
    alert("No hay mas Stock");
  }
  CambiarValoresNumericos();
}
function cambiarContadorDOWN() {
  contador = contador - 1;
  if (contador <= 0) {
    contador = 0;
    alert("Si no quiere comprar porque no se sale?");
  }
  CambiarValoresNumericos();
}
