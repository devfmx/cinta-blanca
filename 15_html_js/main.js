let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let edad = document.getElementById('edad')
let boton = document.getElementById('btn')
let lista = document.getElementById('lista')
var parrafo = document.getElementById('textp')
let cont = [{id:"1",name:"Jorge"},{id:"2",name:"Juan"},{id:"3",name:"Jose"},{id:"4",name:"Joaquin"}]
const handleClick = () => {
  let inputText = nombre.value
  parrafo.innerHTML = inputText

  //here

  for (let i = 0; i < cont.length; i++) {
    const element = cont[i].name;
    
    var node = document.createElement("LI");
    var textnode = document.createTextNode(element);
    node.appendChild(textnode);
    lista.appendChild(node);
    
  }
}

boton.addEventListener('click', handleClick)

