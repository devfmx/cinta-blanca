# Funciones #

***¿Qué son?***

Las funciones son fundamentales en JavaScript. Una función es un procedimiento, un conjunto de sentencias que realizan una tarea.

Para definir una `función` consiste en la palabra reservada *function*, seguida por:

-> El nombre de la función (obligatorio).

->  Paréntesis`()`, dentro de estos pondremos los parámetros que recibirá nuestra función.

-> Las sentencias JavaScript que definen la función, encerradas por llaves, `{ }`.

```javascript
// Declaración de la función
function resta(a, b, c) {
  let res = a - b - c
  console.log(res)
}

// Invocación de la función
resta (15, 8, 2)
```
Los parámetros que estamos pasando a nuestra función son `a, b, c` , estamos diciendo que a, b ,c se van a restar y lo guardamos en una variable llamada `res` y después nos mostrara en la consola `res`.

Después estamos llamando a la función resta, con 3 números diferentes, estos números son los parámetros que le estamos pasando a nuestra función, los números `15, 8 , 2` son los números que vamos a restar en nuestra función.

El resultado de la función es `15 - 8 - 2 = 5`

***Quiero saber más...***

https://www.w3schools.com/js/js_functions.asp