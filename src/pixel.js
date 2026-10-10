/* ============================================================
   PÍXEL DE META
   Se carga sólo si hay un ID en src/config.js. Si está vacío,
   todas las funciones no hacen nada: la web funciona igual.
   ============================================================ */

import { config } from './config.js';

export const pixelActivo = () => Boolean(config.metaPixelId);

/** Inyecta el script de Meta y dispara el PageView inicial. */
export function initPixel() {
  if (!pixelActivo() || window.fbq) return;

  const fbq = function (...args) {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
    else fbq.queue.push(args);
  };
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  window.fbq('init', config.metaPixelId);
  window.fbq('track', 'PageView');
}

/**
 * Evento estándar de Meta. Los que usamos:
 *   ViewContent  -> cambió de giro (content_category = giro)
 *   Contact      -> pulsó cualquier botón de WhatsApp
 *   AddToCart    -> eligió un paquete
 *   Lead         -> envió el formulario de pedido
 * No hace nada si el píxel no está configurado.
 */
export function track(evento, datos) {
  if (!pixelActivo() || typeof window.fbq !== 'function') return;
  window.fbq('track', evento, datos || {});
}

/** Evento propio, para lo que Meta no cubre con uno estándar. */
export function trackCustom(evento, datos) {
  if (!pixelActivo() || typeof window.fbq !== 'function') return;
  window.fbq('trackCustom', evento, datos || {});
}
