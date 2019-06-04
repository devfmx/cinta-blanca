
# Objetos y Arreglos #

***¿Qué son?***

Los objetos y arreglos son variables especiales ya que pueden tener varios elementos.

Las variables de tipo arreglo de definen de la siguiente manera...

```javascript
var array = []  
```

Los arreglos pueden contener mas de un valor, estos son divididos por comas.

```javascript
var animals = ['perrito', 'gatito', 'pajarito']
var numbers = [10, 50 , 300] 
```
Los arreglos tienen posiciones empezando el la posicion `0`

```javascript
var animals = ['perrito', 'gatito', 'pajarito']
                    0       1           2 
```
En la consola podemos acceder a los elementos del arreglo:
```javascript
    console.log(animals[0])
    console.log(animals[1])
    console.log(animals[2])
```
Para agregar otro elemento a nuestro arreglo solamente decimos que valor es, y en la `pocision` en la queremos que este(si decimos que ocupe una posicion que ya esta ocupada, este nuevo elemento lo remplazara) 

```javascript
  
  var animals = ['perrito', 'gatito', 'pajarito']
  
  animals.push('cocodrilo')
  console.log(animals)
```

Los objetos se definen de la siguiente manera:


```javascript
  var persona = {
      nombre : "Pepito",
      edad : "22",
      trabajo : "Developer"
  }

```
Para acceder a la informacion de un objeto  se hace de la siguiente manera:


```javascript
  console.log(persona.nombre)
```

Tanto como las variable `array` y `object` son es especiales, un objeto puede tener arreglos adentro o un arreglo puede tener un objeto.

***Quiero saber mas...***

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

https://www.w3schools.com/js/js_array_methods.asp