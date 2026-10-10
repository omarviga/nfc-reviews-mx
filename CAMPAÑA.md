# Preparación para la campaña de Facebook

Los tres bloqueos técnicos que impedían pautar ya están resueltos. **Faltan dos
valores tuyos** para que quede operativo.

## ⚠️ Lo que tienes que rellenar

Todo está en un solo archivo: **`src/config.js`**.

```js
export const config = {
  whatsapp: '525512345678',      // ← tu número real, lada 52 y sin espacios
  whatsappTexto: '55 1234 5678', // ← cómo se muestra en pantalla
  metaPixelId: ''                // ← tu Pixel de Meta (Events Manager)
};
```

**El número**: lada de país + número, solo dígitos. Si tu número es
55 8765 4321, se escribe `525587654321`.

**El píxel**: en Meta → Events Manager → Orígenes de datos → tu píxel → el ID es
un número largo tipo `123456789012345`.

Si dejas `metaPixelId` vacío, no se carga nada y la web funciona igual: **no hay
riesgo en publicar antes de tenerlo**.

## Lo que se arregló

### 1. El número de WhatsApp
Antes había un placeholder `525512345678` repetido en 4 sitios, y el enlace del
header era `href="#"` (no hacía nada). Ahora **el número vive solo en
`src/config.js`** y los 4 sitios lo leen de ahí:

| Sitio | Estado |
| --- | --- |
| Botón flotante | ✅ `wa.me` con mensaje prellenado |
| Header (escritorio) | ✅ antes era `href="#"` |
| Modal del pedido | ✅ mensaje completo con negocio, ciudad y paquete |
| Pie de página | ✅ ahora es un enlace |

Cambiar el número es editar **una línea**.

### 2. El píxel de Meta
En `src/pixel.js`. Se carga solo si hay ID, y expone `track()` y `trackCustom()`.
Los eventos que ya se disparan:

| Evento | Cuándo | Para qué sirve |
| --- | --- | --- |
| `PageView` | Al cargar | Base |
| `ViewContent` | Al elegir giro (`content_category` = giro) | Crear públicos por giro y ver cuál despierta interés |
| `AddToCart` | Al pulsar "Elegir paquete" (`value` en MXN) | Señal de medio embudo |
| `Lead` | Al enviar el formulario | **Tu conversión principal** |
| `Contact` | Al pulsar cualquier botón de WhatsApp | **Tu conversión real de negocio** |

Para optimizar campañas, usa `Contact` y `Lead` como conversiones. `AddToCart` y
`ViewContent` sirven para armar públicos personalizados.

### 3. Cada anuncio cae en su giro
Antes la web abría siempre en clínicas. Ahora lee `?giro=` de la URL, y al
cambiar de giro actualiza la URL para que el enlace se pueda compartir.

**Usa estas URLs en los anuncios:**

| Campaña | URL |
| --- | --- |
| Restaurantes | `https://tudominio.mx/?giro=restaurantes` |
| Clínicas | `https://tudominio.mx/?giro=clinicas` |
| Belleza | `https://tudominio.mx/?giro=belleza` |
| Servicios | `https://tudominio.mx/?giro=servicios` |
| Hoteles | `https://tudominio.mx/?giro=hoteles` |

También acepta los ids internos (`?giro=doctors`) por si acaso. Y si alguien
escribe un giro que no existe, cae en clínicas sin romperse.

## Antes de pautar: lista de verificación

- [ ] Poner el número real en `src/config.js` **y probar el botón flotante** desde el móvil.
- [ ] Crear el píxel en Events Manager y pegar el ID.
- [ ] Verificar el dominio en Business Manager (te dará una etiqueta: hay un hueco
      marcado en `index.html` para pegarla).
- [ ] Confirmar que `nfc-reviews.mx` es tu dominio real: está escrito en `index.html`
      en `canonical`, `og:url` y `og:image`. Si es otro, cámbialo en los tres sitios.
- [ ] Llenar la página de Facebook: los 5 videos, las placas, el unboxing y 3-4 reseñas.
- [ ] Conectar el número a WhatsApp Business (respuestas rápidas y mensaje de bienvenida).

## Cómo comprobar que el píxel funciona

1. Instala la extensión **Meta Pixel Helper** en Chrome.
2. Abre la web y cambia de giro: debe aparecer `PageView` y varios `ViewContent`.
3. Pulsa un botón de WhatsApp: debe aparecer `Contact`.
4. Envía el formulario: debe aparecer `Lead`.

Si el Pixel Helper no ve nada, revisa que `metaPixelId` no esté vacío y que no
tengas un bloqueador de anuncios activo.

## Lo que conviene saber de estos eventos

- **`Contact` es tu evento más importante**, no `Lead`. En este negocio casi nadie
  rellena el formulario: escriben por WhatsApp. Si optimizas solo por `Lead`, Meta
  buscará gente que rellena formularios en vez de gente que escribe.
- Los eventos llevan `content_category` con el giro. Eso te permite, en unos
  meses, crear un público de "visitó la página de restaurantes y no escribió" y
  lanzarle un anuncio distinto.
- Sin `AddToCart` ni `ViewContent` no hay embudo que analizar: solo verías el
  clic final. Con ellos puedes ver en qué paso se cae la gente.
