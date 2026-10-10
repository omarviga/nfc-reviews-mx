# Optimización para móvil

Medido en Chrome con un viewport de 390 × 844 (iPhone 14/15), 360 y 320 px de ancho.
El diagnóstico se hace midiendo el DOM, no a ojo: altura de página, desbordes
horizontales, áreas táctiles y altura de cada sección.

## Antes y después

| | Antes | Ahora |
| --- | --- | --- |
| Alto de la página (390 px) | 19.325 px | **17.967 px** |
| Desborde horizontal | 105 px | **8 px** (solo brillos decorativos) |
| Elementos táctiles < 42 px | 8 | **0** |
| Alto del catálogo | 3.094 px | **1.436 px** |

El desborde de 8 px que queda son los `div` de brillo (`-inset-6`, `-inset-10`)
que por diseño sobresalen de su tarjeta; los recorta `overflow-x: hidden` del
`body`, así que no se ven ni permiten arrastrar la página.

## Los cuatro cambios

### 1. El selector de giros ya no está escondido
Antes, en móvil el selector estaba detrás del botón `☰`: la página pedía "Elige
tu negocio" y no mostraba nada. Ahora es una **tira horizontal deslizable**
siempre visible, con la pista "desliza →" a la derecha. El botón `☰` y su estado
`menuOpen` se eliminaron.

En escritorio sigue siendo la rejilla de 5 columnas de siempre.

### 2. Áreas táctiles de 44 px o más
- Chips de giro: `py-3` en móvil (50 px de alto).
- Enlaces de giro del pie: `py-3` (45 px).
- Sliders de la calculadora de ROI: `h-11` en móvil (44 px), `md:h-6` en escritorio.
- Botones del selector del catálogo: `py-3.5` (45 px).

### 3. El catálogo arranca en "solo mi giro"
Las 20 herramientas en una columna hacían una sección de 3.094 px. Ahora, por
debajo de 768 px, el catálogo abre mostrando solo las del giro activo (6 o 7) y
oculta las familias que ese giro no usa. Un selector permite ver las 20.

```js
const [soloMio, setSoloMio] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
```

En escritorio el valor inicial es `false`: se sigue viendo el catálogo completo,
que es donde el "20 herramientas" vende.

### 4. `min-w-0` en el formulario de pedido
Ver la trampa de abajo.

## ⚠️ La trampa del `<select>` con opciones largas

El desborde de 105 px lo causaba el `<select>` de paquetes: un `<select>` toma su
ancho mínimo del **texto de su opción más larga**, y la opción del paquete de
clínicas ("Clínica • $2,499 MXN • 3 placas + 5 stickers QR + 3 tarjetas") medía
más que la pantalla. Como los hijos de una rejilla tienen `min-width: auto` por
defecto, esa opción estiraba la columna y **toda la página** se salía 105 px.

**Si añades texto a una opción de `<select>`, vuelve a comprobarlo.** La defensa
está puesta en dos sitios:

```jsx
<div className="min-w-0">                     {/* hijo de la rejilla */}
<form className="min-w-0 ...">                {/* hijo de la rejilla */}
<select className="w-full min-w-0 ...">       {/* el propio select */}
```

## Cómo volver a medirlo

Con el servidor de desarrollo levantado y Chrome en modo depuración:

```js
// en la consola del navegador, con el viewport en 390 px
const vw = innerWidth;
const cat = [...document.querySelectorAll('section')].find(s => s.textContent.includes('herramientas, cinco giros'));
const chicos = [...document.querySelectorAll('a,button,input,select,textarea')]
  .filter(e => { const r = e.getBoundingClientRect(); return r.height > 0 && r.height < 42; });
console.log({
  alto: document.body.scrollHeight,
  desborde: document.documentElement.scrollWidth - vw,
  catalogo: Math.round(cat.getBoundingClientRect().height),
  tactilesPequenos: chicos.length
});
```

Lo que buscas: `desborde` en 8 (solo los brillos), `tactilesPequenos` en 0 y el
catálogo por debajo de 1.600 px.

## Lo que queda por decidir

La página sigue siendo larga en móvil (~18.000 px). Los dos bloques más altos son
**"El hardware" (2.335 px)** y **"Hecho para tu giro" con los beneficios
(1.831 px)**: cuatro y tres imágenes cuadradas a ancho completo, una debajo de
otra.

Se pueden acortar bastante convirtiéndolos en **carruseles deslizables** (una
fila en vez de tres), pero eso esconde contenido detrás de un gesto. En una
página que vende, es una decisión de negocio, no técnica: por eso no la tomé yo.

## Nota sobre el servidor de desarrollo

Vite escucha en `::1` (IPv6). Chrome a veces resuelve `localhost` a `127.0.0.1`
y recibe `ERR_CONNECTION_REFUSED`. Si te pasa al automatizar capturas, usa
`http://[::1]:5173/` en vez de `http://localhost:5173/`.
