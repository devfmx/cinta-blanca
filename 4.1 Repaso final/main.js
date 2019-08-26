// botones
let btnGatitos = document.getElementById('btnGatitos')
let btnPerritos = document.getElementById('btnPerritos')
// texto
let txtGatitos = document.getElementById('cardGatitos')
let txtPerritos = document.getElementById('cardPerritos')

let contadorGatitos = 0
let contadorPerritos = 0

const handleGatitos = () => {
  console.log('team gatitos')
  contadorGatitos++
  txtGatitos.innerHTML = contadorGatitos
}

const handlePerritos = () => {
  console.log('team perritos')
  contadorPerritos++
  txtPerritos.innerHTML = contadorPerritos
}

btnGatitos.addEventListener('click', handleGatitos)
btnPerritos.addEventListener('click', handlePerritos)