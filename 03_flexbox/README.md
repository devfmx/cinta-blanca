
# CSS FLEXBOX

***¿Qué es CSS Flexbox?***

**Flexbox** es un módulo de diseño en CSS3 para mejorar la forma en que hacemos Responsive Design. Gracias a FlexBox facilitamos la forma en que posicionamos elementos, es más simple y usamos menos código.

![css-image](https://s3-us-west-1.amazonaws.com/fili-blog/2018/09/flex-wrap2.jpg)

***Usabilidad: parent y childrens***

Debido a que flexbox es un módulo bastante robusto y completo, contiene entre su catálogo un número amplio de propiedades, algunas de ellas diseñadas para ser aplicadas a un "contenedor padre" tambien conocido como **flex container** y otras diseñadas para aplicarse a un "contenedor hijo" o **flex items**

Si el diseño usual de una web está basado en los display **block** e **inline**, flexbox 
está basado en **flex-flow directions** las cuales son: 

main axis - Es el eje principal de un contenedor flex, no necesariamente es horizontal, esto puede depender de la propiedad **flex-direction** explicada más adelante.

![flex](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

***Display: flex***
La sintaxis para indicar que usaremos flexbox es la siguiente 

```css
css

.container {
  display: flex; /* or inline-flex */
}
```

Este display debe ser aplicado al contenedor padre, y se le tendra efectos en todos los contenedores "hijos", automaticamente quitará cualquier display que el item trajera por defecto.

![imagen flex](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)
![imagen flex](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)



***Justify Content, Align Items y Flex Direction***

Justify content: Es la alineación horizontal de los elementos el cual tiene 5 posiciones **flex-start**, **center** , **flex-end**, **space-around** y **space-between**

![imagen flex](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)


Align Items: Igualmente posee 5 posiciones de forma vertical **flex-start**, **center** , **flex-end** , **stretch** y **baseline**

![imagen flex](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)


Flex Direction: Esta alineación es bastante curiosa pues invierte los ejes "rotando" el contenedor padre por lo que ahora justify content alineara verticalmente y align items lo hara horizontalmente.

![imagen flex](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

Al final pordia quedarnos un codigo similar a este:

```css
css

.container {
  display: flex; /* or inline-flex */
  flex-direction: center;
  justify-content: center;
  align-items: center;
}
```

***Ventajas y Desventajas***

Ventajas: 
Una de las principales ventajas de flexbox es precisamente su posicionamiento simetrico de elementos, pues en cualquier resolución de pantalla que te encuentres, tu elemento se encontrará en el lugar que hayamos indicado.

Desventajas:
Como no puede ser todo perfecto, uno de los problemas principales de flexbox es que te limita en cuanto a posiciones disponibles, pues como se menciona, es un módulo que busca la simetria entre elementos.

>Más contenido de apoyo: https://flexboxfroggy.com/#es y https://css-tricks.com/snippets/css/a-guide-to-flexbox/  





