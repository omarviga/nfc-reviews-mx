# Imágenes y videos de la web

Todo lo visual vive en `public/images/` y se sirve desde la raíz (`/images/...`).
La web usa copias optimizadas en WebP y MP4 organizadas por giro. Los archivos
originales que subiste se conservan **sin tocar** en `public/images/originales/`
(imágenes) y `originales-video/` (videos, fuera de `public/`).

## Estructura

```
public/images/
├── originales/                   31 archivos originales, intactos (no los usa la web)
├── producto/
│   ├── bodegon.webp              las 5 placas, una por giro, en sus colores
│   ├── detalle-frente.webp       macro: frente cepillado + logo grabado
│   ├── detalle-qr.webp           macro: QR grabado a láser al reverso
│   ├── detalle-adhesivo.webp     macro: liner 3M™ 300LSE
│   └── placas.webp               (disponible, sin usar: la foto anterior de producto)
├── restaurants/                  hero · b1 b2 b3 · portal · portal-propina
│                                 · video-poster · video.mp4
├── doctors/                      hero · b1 b2 b3 · alt · portal · kit
│                                 · video-poster · video.mp4
├── beauty/                       hero · b1 b2 b3 · portal · video-poster · video.mp4
├── services/                     hero · b1 b2 b3 · portal · video-poster · video.mp4
└── hotels/                       hero · b1 b2 b3 · portal · video-poster · video.mp4
```

`originales-video/` (en la raíz del proyecto) guarda los 5 videos **antes** de
recomprimirlos, por si quieres volver a exportarlos con otro ajuste.

## De dónde salió cada archivo

### Primer batch
| Archivo original | Destino |
| --- | --- |
| `restaurant.jpg` | `restaurants/hero.webp` |
| `beneficio-restaurant.jpg` | `restaurants/b1.webp` |
| `beneficio-Propina Digital.jpg` | `restaurants/b2.webp` |
| `menu-qr.jpg` | `restaurants/b3.webp` |
| `image_20261009_124744.jpg` | `doctors/hero.webp` |
| `higienico.jpg` | `doctors/b1.webp` |
| `Clinica-calendario.jpg` | `doctors/b2.webp` |
| `beneficio-mas-pacientes.jpg` | `doctors/b3.webp` |
| `dentista.jpg` | `doctors/alt.webp` |
| `salon.jpg` | `beauty/hero.webp` |
| `beneficio-Belleza.jpg` | `beauty/b1.webp` |
| `beneficio-reserva.jpg` | `beauty/b2.webp` |
| `beneficio-instagram.jpg` | `beauty/b3.webp` |
| `taller.jpg` | `services/hero.webp` |
| `beneficio-servicios-prof.jpg` | `services/b1.webp` |
| `beneficio-whatsapp-cot.jpg` | `services/b2.webp` |
| `beneficio-mas-que-resenas.jpg` | `services/b3.webp` |
| `hotel.jpg` | `hotels/hero.webp` |
| `beneficio-wifi.jpg` | `hotels/b1.webp` |
| `beneficio-hotel-resena.jpg` | `hotels/b2.webp` |
| `beneficio-hotel-guia-local.jpg` | `hotels/b3.webp` |
| `Gemini_Generated_Image_98to4q98to4q98to.jpg` | `producto/placas.webp` (sin usar) |

### Segundo batch (kit de credibilidad)
| Archivo original | Destino |
| --- | --- |
| `bodegon-5-placas-por-giro.jpg` | `producto/bodegon.webp` |
| `producto-macro-frente-qr-3M.jpg` | `producto/detalle-frente.webp`, `detalle-qr.webp`, `detalle-adhesivo.webp` |
| `portal-restaurantes-inicio.jpg` | `restaurants/portal.webp` |
| `portal-restaurantes-propina.jpg` | `restaurants/portal-propina.webp` |
| `portal-clinica-inicio.jpg` | `doctors/portal.webp` |
| `portal-belleza-inicio.jpg` | `beauty/portal.webp` |
| `portal-servicios-inicio.jpg` | `services/portal.webp` |
| `portal-hoteles-inicio.jpg` | `hotels/portal.webp` |
| `kit-clinica-unboxing.jpg` | `doctors/kit.webp` |

Los 3 detalles del macro salen de **un solo archivo**, recortado en tres zonas
(frente en `(560,40,1240,720)`, QR en `(780,560,1460,1240)`, adhesivo en
`(760,880,1560,1600)`).

### Videos
| Original | Destino |
| --- | --- |
| `beauty/demo.mp4` → `video.mp4` | `beauty/video.mp4` |
| `restaurants/video.mp4` | `restaurants/video.mp4` |
| `doctors/video.mp4` | `doctors/video.mp4` |
| `services/video.mp4` | `services/video.mp4` |
| `hotels/video.mp4` | `hotels/video.mp4` |

Los 5 se recomprimieron a **H.264 CRF 27, 720×1280, audio 64 kbps mono y
`+faststart`**: pasaron de 19,71 MB a 6,68 MB (−66 %) sin pérdida visible. Los
pósters salen del segundo 3,2 de cada video.

## Tamaños y proporciones

| Uso | Proporción | Exportado | Peso típico |
| --- | --- | --- | --- |
| `hero.webp` | 4:5 | 900 × 1125 | 34–82 KB |
| `b1..b3.webp` | 1:1 | 840 × 840 | 17–75 KB |
| `portal.webp` | 1:1 | 900 × 900 | 37–103 KB |
| `portal-propina.webp` | 1:1 | 900 × 900 | 93 KB |
| `producto/bodegon.webp` | 1:1 | 1000 × 1000 | 21 KB |
| `producto/detalle-*.webp` | 1:1 | 800 × 800 | 17–39 KB |
| `doctors/alt.webp` | 4:5 | 720 × 900 | 31 KB |
| `doctors/kit.webp` | 1:1 | 900 × 900 | 47 KB |
| `video-poster.webp` | 9:16 | 540 × 960 | 33–49 KB |
| `video.mp4` | 9:16 | 720 × 1280, 10 s | 1,13–1,49 MB |

Total en uso: **8,45 MB** (1,78 MB en 38 WebP + 6,68 MB en 5 videos).

## Dónde aparece cada pieza

- **Hero** (`hero.webp`): tarjeta grande con la etiqueta del giro, la insignia
  flotante "Nueva reseña" y la barra de valoración con `NFC + QR`.
- **Beneficios** (`b1..b3.webp`): cabecera cuadrada de cada tarjeta, en el orden
  de `benefits` en `src/data.js`.
- **Video** (`video.mp4` + `video-poster.webp`): bloque con marco de teléfono que
  aparece en los 5 giros, con titular, texto y viñetas propios de cada uno
  (`video.title`, `video.sub`, `video.bullets`). Se reproduce en bucle, sin
  sonido y sin controles.
- **Galería "Un producto, cinco giros"**: usa `images.tile` de cada giro
  (`doctors` usa `alt.webp`). Cada tarjeta cambia el giro activo.
- **Portal real**: `images.portal` en la sección oscura, con la etiqueta
  "Pantalla real del portal". `restaurants` además muestra `images.portal2`
  (la pantalla de propina) como tarjeta superpuesta.
- **El hardware**: `producto/bodegon.webp` como imagen principal y los tres
  `producto/detalle-*.webp` en la fila de detalle.
- **Paquetes**: el paquete marcado con `popular: true` muestra `packages[].img`
  (`doctors/kit.webp`) en el giro de clínicas.

## Cómo cambiar una imagen o un video

1. Sustituye el archivo en `public/images/<giro>/` manteniendo el nombre, la
   proporción y un ancho cercano al de la tabla.
2. Si partes de un JPG/PNG, expórtalo a WebP (calidad ~80):
   `magick foto.jpg -resize 900x1125^ -gravity center -extent 900x1125 -quality 80 hero.webp`
3. Para un video: H.264, 720×1280, `-crf 27 -movflags +faststart`. Extrae el
   póster del segundo 3,2 y guárdalo como `video-poster.webp` (540×960).
4. El texto alternativo está en `src/data.js` (`heroAlt`, `imgAlt`, `portalAlt`,
   `tileAlt`). Actualízalo si cambias la foto: es lo que leen Google y los
   lectores de pantalla.
5. Recarga la página; Vite no necesita reinicio.

Las fotos se recortan siempre desde el centro. Si el sujeto está arriba o abajo,
recorta tú antes de exportar para controlar el encuadre.

## Notas

- Las imágenes y videos son tuyos (generados para el proyecto): no requieren
  atribución ni tienen licencias de terceros que acreditar.
- `public/images/originales/` pesa **13,92 MB y sí se copia a `dist/`** en cada
  build aunque la web no lo use. Hoy `dist/` pesa 22,73 MB: sin esa carpeta
  quedaría en ~8,8 MB. Si quieres un despliegue ligero, muévela fuera de
  `public/` (por ejemplo a `originales-imagenes/` en la raíz, junto a
  `originales-video/`) o bórrala cuando ya no la necesites.
- Los videos ya están recomprimidos; no hace falta volver a tocarlos salvo que
  cambies el contenido.
