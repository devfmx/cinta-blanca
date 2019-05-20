

// let array = [9, 30, 'a', 'hola', 10, 'a', 'hola', 10]


// for(let i = 0; i < array.length ; i = i + 1) {
//   console.log( array[i] )
// }

// let x = 10
// equivalentes
// x = x + 1
// x += 1
// x++

// console.log(x)


// for(let i = 1; i <= 100 ; i++) {

//   if( i % 2 === 0){
//     console.log(i, 'es par')
//   }else {
//     console.log(i, 'es impar')
//   }

// }

// Funciones

const suma = (a, b) => {
  return a + b
}

const resta = function(a, b){
  return a - b
}

let x = suma(10, 6)
let y = suma(x, 100)


let res = suma(suma(10, 6), 100)
console.log(y)
console.log(res)

