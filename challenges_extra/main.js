
// function texto() {
//   let palabra = prompt("Escribe una palabra").toLowerCase();

//   // eliminamos los espacios en blanco
//   // palabra = palabra.replace(/ /g, "");

//   for (let i = 0; i < palabra.length; i++) {
//     if (palabra[i] != palabra[palabra.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// if (texto()) {
//   alert("Esto es palíndromo");
// } else {
//   alert("Esto no es palíndromo")
// }

let palabra = prompt('palabra')
let resultado = ''

for(i = 0; i < palabra.length; i++) {
  if(i % 2 === 0) {
    resultado += palabra.charAt(i).toLowerCase()
  } else {
    resultado += palabra[i].toUpperCase()
  }
}
console.log(resultado)
