/* ============================================================
   CONFIGURACIÓN
   Los dos únicos valores que hay que cambiar antes de pautar.
   Están aquí y sólo aquí: no los repitas en ningún otro archivo.
   ============================================================ */

export const config = {
  // ⚠️ TU NÚMERO REAL DE WHATSAPP.
  // Lada de país + número, sólo dígitos y sin espacios.
  // México es 52. Ejemplo: 52 55 1234 5678  ->  '525512345678'
  whatsapp: '525512345678',

  // Cómo se muestra el número en pantalla (sólo estético).
  whatsappTexto: '55 1234 5678',

  // ⚠️ TU PÍXEL DE META (Events Manager → Orígenes de datos → ID del píxel).
  // Es un número largo, tipo '123456789012345'.
  // Si lo dejas vacío, NO se carga nada y la web funciona igual.
  metaPixelId: ''
};

/** Enlace de WhatsApp con el mensaje ya escrito. */
export const waLink = (texto) =>
  `https://wa.me/${config.whatsapp}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
