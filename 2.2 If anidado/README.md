#Condicionales If#

***¿Qué es?***

La declaracion `if` se utiliza para especificar un bloque de código JavaScript que se ejecutará si una condición es verdadera.

La forma correcta de declarar un `if` es :


```javascript
if( condicion ){
    paso 1
}else{
    paso 2
}
```
En resumen, si se `cumple` la condición, se ejecuta el paso 1, de lo `contrario`, se pasa al else y se ejecuta* el paso 2.

Ejemplo:

```javascript
var edad= 15

if( edad < 18 ){
    "Eres menor de edad D:"
}else{
    "Eres mayo de edad :D"
}
```
Tambien podemos hacer `if` anidados.
Ejemplo:

```javascript

var dia = 'soleado'
var hora = '5:00' 
if( dia === 'nublado' ){
    'No salgas'
}else{
    if(hora === '5:00' ){
            "Estas a tiempo para la funcion"
    }else{
        "Corre!!! Vas tarde!"
    }
}
```
***Quiero saber mas...***
https://www.w3schools.com/js/js_if_else.asp
https://www.w3schools.com/jsref/jsref_if.asp
