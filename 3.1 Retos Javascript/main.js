
// let espacios = ''

// for( let i = 0; i <= 7; i++){

//   for(let j = 0; j <= 7; j++){
//     if( (i + j) % 2 === 0){
//       espacios += ' '
//     } else {
//       espacios += '#'
//     }
//   }

//   espacios += '\n'
// }

// console.log(espacios)

for(let i = 1; i <=100; i++ ) {

  if (i % 3 === 0 && i % 5 === 0){
    console.log(i, 'fizzbuzz')
  } else if(i % 3 === 0){
    console.log(i, 'fizz')
  } else if (i % 5 === 0){
    console.log(i, 'buzz')
  }else {
    console.log(i)
  }
}


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
