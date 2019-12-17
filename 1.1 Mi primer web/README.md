# HTML #

***¿Qué es?***

"Lenguaje de marcado de hipertexto", se encarga de definir la estructura de un sitio web, define los elementos que van a existir, y jerarquiza los elementos que pertenecen al mismo tipo.


Basado en etiquetas: las etiquetas son el elemento fundamental de HTML. Se componen de los caracteres `<`,  `>` y `/`. La mayoría de etiquetas tienen etiqueta de inicio y etiqueta de cierre, se diferencian porque la etiqueta de cierre contiene el carácter `/`antes del nombre

```html
<html> </html>
<body> </body>
```

### HTML5 ###

Es el estándar actual de HTML que permite usar etiquetas que mejoran la semántica de un sitio web. Al principio de un documento se incluye `<!DOCTYPE html>` para que el navegador interprete qué se está usando este estándar.

***Estructura básica de un documento HTML***

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

***head***

Dentro de esta etiqueta se colocan elementos que el navegador va a usar para pero no se van a mostrar en el cuerpo de la página. Aquí van elementos como el título de nuestra página, la imagen que aparece en la pestaña del navegador, o las palabras clave para indexar en buscadores.

***body***

Todos los elementos que se escriban dentro de esta etiqueta se van a mostrar en el website. aquí van las etiquetas de texto, imágenes, botones, inputs, etc.

***title***

Muestra el texto introducido entre las etiquetas de apertura y cierre, en la pestaña del navegador.

### Etiquetas de texto ###

Es buena práctica que todos los textos de la página vayan dentro de alguna etiqueta. 

```html
<h1>Etiqueta para título</h1>
<h2>Etiqueta de subtitulo</h2>
<p>Etiqueta de párrafo</p>
<span>span</span>
<strong>Negritas</strong>
<label>Label</label>
```

***Etiqueta img***

Se usa para integrar imágenes a nuestros sitios web. No tiene etiqueta de cierre y tiene un atributo especial `src` que es la ubicación de la imagen.

```html
<img src="imagen.jpg" />
```

***Etiqueta a***

Usada para poner hipervínculos a una dirección en particular. Contiene el atributo `href`
que contiene la url a dónde seremos redireccionados.

```html
<a href="https://google.com"> texto </a>
```

***listas***

Son estructuras que definen una lista, pueden ser ordenadas `ol` o desordenadas `ul`. las listas contienen elementos de lista.

```html
<ul>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ul>
```

### Elementos Block e Inline ###

Cada elemento HTML tiene un valor de `display` por defecto dependiendo del tipo de elemento del que se trate. El valor por defecto para la mayoría de los elementos es `block` o `inline`

***Elementos Block***

Un elemento a nivel de block siempre empieza en una línea nueva y toma el ancho completo disponible (se estira hacia la izquierda y hacia la derecha tan lejos como pueda). 

Los elementos de tipo bloque en html son:
```html
<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main ><nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>
```

***Elementos Inline***

Un elemento inline no empieza en una línea nueva y solo toma el ancho que necesite tomar.

Los elementos de tipo inline en html son:
```html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>
```

![alt text](https://i.pinimg.com/originals/9f/cc/f3/9fccf3e0600ac806e52d73cce33c3d06.png "Block vs Inline")

***Quiero saber más...***

https://www.w3schools.com/html/html_intro.asp
https://developer.mozilla.org/es/docs/Web/HTML
https://www.w3schools.com/html/html_blocks.asp



