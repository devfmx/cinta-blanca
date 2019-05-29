
# Ciclo For #

***¿Qué es?***

El `ciclo for` se repite hasta que la condición especificada se evalúa como false.

Necesita definir un inicio, un final y una secuencia, de define de la siguiente manera:

Un ciclo for consiste en tres expresiones obligatorias, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.


```javascript
for(let i = 0; i <= 100; i = i + 1){
    console.log(i)
}

//Una abreviacion para la expresion:
//      i = i+1
//Se puede poner de la siguinte manera : i++

for(inicio; final; secuencia){
    bloque de codigo que se ejecutara
}
```
En este ejemplo de estamos declarando la varible `i`, `i` empieza en 0 , es menor e igual a 100 y la secuencia es de 1 + .


***Quiero saber mas...***
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for