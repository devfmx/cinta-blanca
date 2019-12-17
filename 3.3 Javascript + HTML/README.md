# JavaScript + HTML #

JavaScript hace que las páginas web sean más dinámicas e interactivas, JavaScript fue diseñado con el propósito de escribir scripts - también conocidos como piezas de código o programas - que pueden agregar interactividad a tu sitio web.

Por ejemplo, un script puede generar un mensaje en una caja de alerta, o proveer una lista de opciones en un menú desplegable.

Con JavaScript puedes escribir pequeñas funciones, llamadas event handlers (manejadores de eventos) y hacer que éstas se activen empleando atributos HTML.

```html
<html>
    <body>
        <input type="button" onclick="saludar()">
        <!-- Vinculamos nuestro archivo de Javascript -->
        <script src="/miproyecto/script.js"></script>
    </body>
</html>
```

Para seleccionar un elemento HTML y hacer uso de este, usualmente empleamos el método `document.getElementById()`

```js
document.getElementById("myId");
```

```html
<h1 id="myId">Título</h1>
```

### Document Object Model

El **DOM** de un HTML es un **modelo de objetos** estándar y una **interfaz** de programación para HTML. Este define:
* Los elementos HTML como objetos
* Las propiedades de todos los elementos HTML
* Los métodos para acceder a todos los elementos HTML
Los eventos para todos los elementos HTML

En otras palabras: El DOM de HTML es el estándar para cómo **obtener**, **modificar**, **cambiar** o **borrar** elementos HTML.

Mediante el DOM, JavaScript puede acceder y modificar todos los elementos de un documento HTML.

![alt text](https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/08/Js-Dom-Tree.png)

Con este modelo de objetos, JavaScript obtiene todo el poder que necesita para crear páginas HTML dinámicas:
* Puede modificar todos los elementos HTML de una página
* Puede modificar todos los atributos HTML de una página
* Puede modificar todos los estilos CSS de una página
* Puede remover elementos y atributos HTML de una página
* Puede agregar nuevos elementos y atributos HTML a una página
* Puede reaccionar a todos los eventos HTML existentes en una página
* Puede crear nuevos eventos HTML en una página

***Quiero saber más...***

https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n