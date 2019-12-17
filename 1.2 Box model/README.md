# CSS #

***¿Qué es?***

"Hoja de estilos en cascada", se encarga de establecer las reglas de apariencia de cada elemento de un html (estilos), como tamaños, colores, tipografías, posiciones.

Los estilos se vinculan desde el html con la etiqueta `link`

```html
<link rel="stylesheet" href="estilos.css">
```

### Selectores ###

Indican a qué elemento de html se le van a aplicar los estilos.

***Selectores de Etiqueta***

Son los nombbres directos de las etiquetas a las que queremos aplicar los estilos. Hay que tener cuidado porque si hay mas de una etiqueta con el mismo nombre, se aplicarán los estilos a todas.
```css
/* Indicamos que la etiqueta h1 tendrá un color azul */
h1 {
    color: blue;
}
```

***Selectores de Clase***
Son selectores con nombres personalizados precedidos por un punto `.clase`. Sirven para poner estilos a las etiquetas que necesitemos sin importar cual sea el nombre de la etiqueta. Es recomendable que las clases tengan nombres que describan al elemento. Las clases se pueden repetir varias veces en el html.

```css
.titulo {
    font-size: 30px;
}
````

***Selectores de Id***
Selectores únicos, solo puede haber uno con el mismo nombre en un documento html. Están precedidas por el símbolos `#``

```css
#nombre {
    font-size: 24px;
}
```


### Estilos ###

Los estilos se colocan en el bloque de declaraciones entre llaves `{` `}`, están compuestas por una propiedad y un valor, separados por dos puntos `:`. Cada declaración se finaliza con `;` antes de colocar otra más.

```css
.selector {
    color: red;
    font-size: 18px;
    margin: 10px;
    border: 1px solid red;
}
```
Hay una gran variedad de estilos para modificar cada aspecto visual posible.


### Box model ###

Define a cada elemento de html como una caja, con un alto y ancho, un contenido, margen, borde y padding. Estas a su vez pueden contener otras cajas (elementos de HTML).

![Drag Racing](https://internetingishard.com/html-and-css/css-box-model/css-box-model-73a525.png)

***margin***
La distancia que hay desde el borde del elemento hacia cualquier elemento de adyacente. Se expresa en distancia superior `top`, inferior `bottom`, izquierda `left`, derecha `right`

```css
.clase {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}
```

***padding***
La distancia que hay entre el borde del elemento y el propio contenido del elemento. Se expresa en distancia superior `top`, inferior `bottom`, izquierda `left`, derecha `right`

```css
.clase {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}
```


***Quiero saber más...***

https://developer.mozilla.org/es/docs/Web/CSS
https://www.w3schools.com/css/css_intro.asp
https://www.w3schools.com/css/css_boxmodel.asp
