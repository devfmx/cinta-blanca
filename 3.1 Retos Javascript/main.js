
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



