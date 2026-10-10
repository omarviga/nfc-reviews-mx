# El catálogo de herramientas

La web presenta el producto como una **suite**: un solo hardware del que cuelgan
cinco giros, y cada giro con su propio juego de herramientas de portal. Hoy son
**20 herramientas repartidas en 31 usos** (una misma herramienta sirve a varios
giros con textos distintos).

Todo vive en `src/data.js`, en tres bloques:

| Bloque | Qué es |
| --- | --- |
| `tools` | El registro: cada herramienta con su icono, nombre, descripción y en qué giros está |
| `toolGroups` | Las 5 familias por para qué sirven, cada una con sus herramientas |
| `suite` | El titular y las cifras de la sección de la suite |

Y en cada giro, `portal` es la lista ordenada de sus herramientas:

```js
portal: [
  { id: 'resena', label: 'Dejar reseña en Google' },  // label propio del giro
  { id: 'menu', label: 'Ver menú QR' },
  { id: 'propina', label: 'Propina al mesero' },
  { id: 'instagram' },                                 // sin label: usa el genérico
  { id: 'maps' },
  { id: 'cupon', label: 'Cupón próxima visita' }
],
```

El `label` es lo que hace que el mismo producto suene a cada negocio: el genérico
es "Reseña 5 estrellas" en belleza y "Reseña Google / Airbnb" en hoteles.

## Dónde se ve

1. **Sección de la suite** (`ShowcaseSection`): titular, las 4 cifras y las 5
   tarjetas de giro, cada una con **cuántas herramientas incluye**.
2. **Catálogo** (`ToolCatalog`): las 20 herramientas agrupadas en las 5 familias.
   Las del giro activo van destacadas con su color y con la etiqueta "Tu giro";
   el resto se atenúan. Cada tarjeta lleva los colores de los giros que la usan.
3. **Portal real**: la columna izquierda lista las herramientas del giro activo
   con su icono, su etiqueta y una frase de qué hace, junto a la captura real.
4. **Testimonios**: cada uno muestra su métrica grande (`metric`) cuando el
   texto original tiene un número. Los tres que no lo tienen solo muestran la cita.

## Cómo añadir una herramienta

1. Añádela al registro `tools`:

```js
'reserva-mesa': {
  icon: '🍽️',
  name: 'Reservar mesa',
  desc: 'El comensal aparta su mesa sin llamar por teléfono.',
  giros: ['restaurants']
}
```

2. Métela en su familia dentro de `toolGroups` (en el array `tools` de esa familia).
3. Añádela al `portal` del giro que la incluye, con su `label` si quieres un texto
   propio de ese giro.
4. Si el número total cambia, actualiza el titular en palabras de `suite.title`
   ("Veinte herramientas"). **Las cifras de la sección se calculan solas**; el
   titular es el único número escrito a mano.

## Cómo añadir una familia

Añade un objeto a `toolGroups` con `id`, `label`, `icon`, `desc` y el array
`tools` con los ids. El catálogo la pinta sola, con su contador "n/m en tu giro".

## Ideas para cuando quieras crecer

- **Filtro "solo mi giro"**: hoy el catálogo atenúa lo que no aplica. Un botón
  para ocultarlo del todo daría una vista más limpia al que ya decidió.
- **Comparativa entre giros**: una tabla herramienta × giro para ver de un golpe
  qué cambia entre, por ejemplo, clínicas y belleza.
- **Enlazar cada herramienta con su captura**: cuando tengas pantallas del portal
  para más acciones (no solo la de inicio), cada tarjeta puede abrir la suya.
