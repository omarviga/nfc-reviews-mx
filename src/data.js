export const verticals = {
  restaurants: {
    id: 'restaurants',
    label: 'Restaurantes y Cafés',
    short: 'Restaurantes',
    slug: 'restaurantes',
    emoji: '🍽️',
    color: '#FF6B35',
    colorSoft: '#FFF1EB',
    accent: '#D4AF37',
    images: {
      hero: '/images/restaurants/hero.webp',
      heroAlt: 'Mesa de restaurante con la placa NFC y un comensal dejando reseña de 5 estrellas en Google',
      tile: '/images/restaurants/hero.webp',
      tileAlt: 'Restaurante con placa NFC en la mesa',
      portal: '/images/restaurants/portal.webp',
      portalAlt: 'Pantalla real del portal de un restaurante: botón naranja para dejar reseña en Google, menú digital, propina y WiFi',
      portal2: '/images/restaurants/portal-propina.webp',
      portal2Alt: 'Pantalla real de propina digital con montos de 20, 50 y 100 pesos'
    },
    video: {
      src: '/images/restaurants/video.mp4',
      poster: '/images/restaurants/video-poster.webp',
      label: 'Demo real en un restaurante',
      title: 'La cuenta llega y la reseña ya está puesta',
      sub: 'El comensal toca la placa mientras espera la cuenta. En 10 segundos deja reseña, propina o abre el menú, sin descargar nada.',
      bullets: [
        'El tap abre tu portal con "Dejar reseña" en primer lugar',
        'Puede dejar propina digital al mesero en 3 segundos',
        'El menú QR se actualiza solo, sin reimprimir'
      ]
    },
    hero: {
      title: '¡Llena tu restaurante de reseñas de 5 estrellas mientras tus clientes esperan la cuenta!',
      highlight: '5 estrellas',
      sub: 'La placa NFC que convierte cada mesa en una máquina de reseñas, propinas y clientes nuevos desde Google Maps.',
      cta: 'Quiero más reseñas',
      tag: 'Favorito en CDMX, GDL y MTY'
    },
    benefits: [
      {
        title: 'Más comensales por Google Maps',
        desc: 'Cada reseña te sube en el ranking local. Más visibilidad = mesas llenas.',
        icon: '📍',
        img: '/images/restaurants/b1.webp',
        imgAlt: 'Celular con la ficha de Google Maps del restaurante: más de 200 reseñas y 4.9 estrellas'
      },
      {
        title: 'Propina digital sin fricción',
        desc: 'El cliente toca y puede dejar propina directo a tu staff en 3 segundos.',
        icon: '💸',
        img: '/images/restaurants/b2.webp',
        imgAlt: 'Pantalla de propina digital con montos de 20, 50 y 100 pesos y propina personalizada'
      },
      {
        title: 'Menú QR siempre actualizado',
        desc: 'Mismo tap: Reseña + Menú + Instagram. Cero apps que descargar.',
        icon: '📱',
        img: '/images/restaurants/b3.webp',
        imgAlt: 'Menú digital en el celular junto a la placa con QR para escanear la carta'
      }
    ],
    portal: [
      { id: 'resena', label: 'Dejar reseña en Google' },
      { id: 'menu', label: 'Ver menú QR' },
      { id: 'propina', label: 'Propina al mesero' },
      { id: 'instagram' },
      { id: 'maps' },
      { id: 'cupon', label: 'Cupón próxima visita' }
    ],
    packages: [
      { name: 'Mesas Selectas', plates: '2 placas de mesa', price: '799', old: '999', features: ['Acero inox premium', 'QR + NFC', 'Logo personalizado'] },
      { name: 'Restaurante Lleno', plates: '5 placas + 1 barra', price: '1,499', popular: true, old: '1,899', features: ['Kit completo mesa y barra', 'Dashboard reseñas', 'Soporte WhatsApp'] },
      { name: 'Cadena Pro', plates: '10 placas + póster', price: '2,799', old: '3,499', features: ['Póster A2 para entrada', '10 tarjetas de mesero', 'Menú QR ilimitado'] }
    ],
    testimonial: [
      { name: 'Sofía R.', biz: 'Café Lú - Roma', metric: '312', metricLabel: 'reseñas en 2 meses (antes 47)', text: 'Pasamos de 47 a 312 reseñas en 2 meses. Ahora salimos primero en Maps en la Roma.' },
      { name: 'Chef Memo', biz: 'Tacos Don Chuy', metric: '+34%', metricLabel: 'de propina digital', text: 'La propina digital subió 34%. Los clientes aman no descargar nada.' }
    ]
  },
  doctors: {
    id: 'doctors',
    label: 'Doctores, Dentistas y Clínicas',
    short: 'Clínicas',
    slug: 'clinicas',
    emoji: '🩺',
    color: '#0E4DA4',
    colorSoft: '#EEF4FF',
    accent: '#D4AF37',
    images: {
      hero: '/images/doctors/hero.webp',
      heroAlt: 'Recepción de Clínica Dental Cuida con la placa NFC sobre el mostrador y un paciente dejando reseña en Google',
      tile: '/images/doctors/alt.webp',
      tileAlt: 'Sala de espera de una clínica dental con placa NFC',
      portal: '/images/doctors/portal.webp',
      portalAlt: 'Pantalla real del portal de una clínica dental: bienvenida, dejar reseña en Google y accesos rápidos para agendar cita'
    },
    video: {
      src: '/images/doctors/video.mp4',
      poster: '/images/doctors/video-poster.webp',
      label: 'Demo real en un consultorio',
      title: 'El paciente deja reseña antes de salir por la puerta',
      sub: 'Sin papeles y sin contacto: acerca el celular y en 10 segundos tiene la reseña, su próxima cita y las indicaciones.',
      bullets: [
        'Higiénico: nada de tarjetas ni papel que se toca',
        'Agenda la próxima cita en el mismo tap',
        'Recibe sus indicaciones post-consulta por WhatsApp'
      ]
    },
    hero: {
      title: '¡Duplica las reseñas de tu consultorio y llena tu agenda en 5 segundos!',
      highlight: 'llena tu agenda',
      sub: 'Higiénico, sin contacto y 100% profesional. Pacientes felices dejan reseña antes de salir por la puerta.',
      cta: 'Quiero duplicar reseñas',
      tag: 'Usado por +1,200 consultorios'
    },
    benefits: [
      {
        title: '100% Higiénico y sin contacto',
        desc: 'Nada de papeles. El paciente solo acerca el celular. Ideal para protocolos COFEPRIS.',
        icon: '🧼',
        img: '/images/doctors/b1.webp',
        imgAlt: 'Mano acercando el celular a la placa NFC sin contacto sobre una superficie limpia'
      },
      {
        title: 'Reduce ausentismo 28%',
        desc: 'Recordatorio de reseña = compromiso. El portal incluye botón de reagendar.',
        icon: '📅',
        img: '/images/doctors/b2.webp',
        imgAlt: 'Celular con el recordatorio de la próxima cita junto a la placa NFC del consultorio'
      },
      {
        title: 'Más pacientes por confianza',
        desc: 'Clínicas con +100 reseñas reciben 3.2x más citas desde Google.',
        icon: '👨‍⚕️',
        img: '/images/doctors/b3.webp',
        imgAlt: 'Celular con la ficha de la clínica dental: 5.0 estrellas, más de 200 reseñas y 4.9 de promedio'
      }
    ],
    portal: [
      { id: 'resena', label: 'Dejar reseña en Google' },
      { id: 'cita', label: 'Agendar próxima cita' },
      { id: 'whatsapp', label: 'WhatsApp clínica' },
      { id: 'maps', label: 'Indicaciones Maps' },
      { id: 'indicaciones' },
      { id: 'pagar', label: 'Pagar consulta' }
    ],
    packages: [
      { name: 'Individual', plates: '1 placa recepción', price: '1,499', old: '1,799', features: ['Diseño clínico premium', 'Portal inteligente', 'Logo y cédula'] },
      { name: 'Clínica', plates: '3 placas + 5 stickers QR + 3 tarjetas', price: '2,499', popular: true, old: '3,199', img: '/images/doctors/kit.webp', features: ['Placas CONSULTA, CITAS y EMERGENCIAS', 'Stickers QR para recepción y consultorios', '3 tarjetas de presentación del doctor'] },
      { name: 'Dominación Médica', plates: '6 placas + póster + tótem', price: '3,999', old: '5,200', features: ['Kit sucursales', 'Póster higiénico A2', 'Soporte prioritario'] }
    ],
    testimonial: [
      { name: 'Dra. Valeria M.', biz: 'Dentalia Polanco', metric: '287', metricLabel: 'reseñas (antes 32)', text: 'De 32 a 287 reseñas. Ahora agendamos 18 pacientes más por semana solo por Google.' },
      { name: 'Dr. Andrés L.', biz: 'Clínica Ortopédica', text: 'Los pacientes dejan reseña saliendo. Cero fricción, cero pedir la reseña incómodo.' }
    ]
  },
  beauty: {
    id: 'beauty',
    label: 'Estética, Spa, Barbería',
    short: 'Belleza',
    slug: 'belleza',
    emoji: '💇',
    color: '#D4AF37',
    colorSoft: '#FFF9E6',
    accent: '#FF6B35',
    images: {
      hero: '/images/beauty/hero.webp',
      heroAlt: 'Recepción de estética con la placa NFC dorada y una clienta dejando reseña desde su celular',
      tile: '/images/beauty/hero.webp',
      tileAlt: 'Estética con placa NFC en el mostrador',
      portal: '/images/beauty/portal.webp',
      portalAlt: 'Pantalla real del portal de una estética: "¡Te ves increíble!" con reseña de 5 estrellas, reservar cita y ver antes/después'
    },
    video: {
      src: '/images/beauty/video.mp4',
      poster: '/images/beauty/video-poster.webp',
      label: 'Demo real en un salón de belleza',
      title: 'Así se ve en 10 segundos de salón real',
      sub: 'La clienta termina su servicio, toca la placa y deja su reseña antes de levantarse del sillón. Sin pedirlo y sin incomodidad.',
      bullets: [
        'El tap abre tu portal con la reseña en primer lugar',
        'Puede subir su antes/después y etiquetarte en Instagram',
        'Sale de tu salón con la próxima cita ya agendada'
      ]
    },
    hero: {
      title: '¡Que cada clienta feliz te deje 5 estrellas antes de salir!',
      highlight: 'clienta feliz',
      sub: "Convierte ese '¡me encantó!' en una reseña visible, un antes/después y su próxima reserva automática.",
      cta: 'Quiero reseñas bellas',
      tag: 'Top en estéticas premium'
    },
    benefits: [
      {
        title: 'Antes / Después que vende',
        desc: 'Tu portal muestra galería y pide permiso para publicar su resultado.',
        icon: '✨',
        img: '/images/beauty/b1.webp',
        imgAlt: 'Dos celulares comparando el antes y el después de un cambio de cabello con la invitación a reseñar'
      },
      {
        title: 'Reserva próxima cita automática',
        desc: 'Después de la reseña, botón directo para agendar en 10 seg.',
        icon: '💅',
        img: '/images/beauty/b2.webp',
        imgAlt: 'Pantalla para agendar la próxima cita junto a la placa NFC en el tocador'
      },
      {
        title: 'Instagram que crece sola',
        desc: 'Cada reseña invita a etiquetarte. UGC real sin pagar ads.',
        icon: '📸',
        img: '/images/beauty/b3.webp',
        imgAlt: 'Perfil de Instagram del salón abierto en el celular con más de 200 reseñas'
      }
    ],
    portal: [
      { id: 'resena', label: 'Reseña 5 estrellas' },
      { id: 'antes-despues', label: 'Ver mi antes y después' },
      { id: 'cita', label: 'Reservar próxima cita' },
      { id: 'instagram' },
      { id: 'cupon', label: 'Cupón para una amiga' },
      { id: 'pagar', label: 'Pagar servicio' }
    ],
    packages: [
      { name: 'Espejo', plates: '1 placa tocador', price: '999', old: '1,299', features: ['Dorado cepillado', 'Portal beauty', 'Logo foil'] },
      { name: 'Estudio Lleno', plates: '3 placas', price: '1,899', popular: true, old: '2,400', features: ['Recepción, espejos, caja', 'Link a Booksy/Fresha', 'Tarjetas regalo'] },
      { name: 'Spa Pro', plates: '6 placas + 30 tarjetas', price: '2,999', old: '3,900', features: ['Cabinas + recepción', 'Tarjetas con NFC', 'Póster testimonios'] }
    ],
    testimonial: [
      { name: 'Karla D.', biz: 'Blow Dry Bar', metric: '412', metricLabel: 'reseñas con 4.9 de promedio', text: 'Mis clientas dejan reseña mientras se secan el pelo. 4.9 con 412 reseñas.' },
      { name: 'Barbería Central', biz: 'Condesa', text: 'El link de reserva post-reseña nos llena los martes muertos.' }
    ]
  },
  services: {
    id: 'services',
    label: 'Servicios Profesionales',
    short: 'Servicios',
    slug: 'servicios',
    emoji: '🔧',
    color: '#0F766E',
    colorSoft: '#E6FFFB',
    accent: '#D4AF37',
    images: {
      hero: '/images/services/hero.webp',
      heroAlt: 'Taller mecánico con la placa NFC sobre la mesa de trabajo y un cliente dejando reseña en Google',
      tile: '/images/services/hero.webp',
      tileAlt: 'Taller con placa NFC en el mostrador',
      portal: '/images/services/portal.webp',
      portalAlt: 'Pantalla real del portal de un taller mecánico: dejar reseña en Google, cotización por WhatsApp y mis servicios'
    },
    video: {
      src: '/images/services/video.mp4',
      poster: '/images/services/video-poster.webp',
      label: 'Demo real en un taller',
      title: 'Del "ya está listo" a la reseña en un tap',
      sub: 'Cuando entregas el trabajo entregas también la reseña. El cliente toca la placa y en 10 segundos califica y pide su próxima cotización.',
      bullets: [
        'Cotización por WhatsApp sin llamadas perdidas',
        'Reseña de 5 estrellas justo al entregar el trabajo',
        'Comparte tu ubicación para la próxima visita'
      ]
    },
    hero: {
      title: '¡Convierte cada servicio en una reseña que atrae más clientes!',
      highlight: 'más clientes',
      sub: 'Talleres, gimnasios, veterinarias, autolavados. Si tu negocio vive de Google Maps, esta placa es tu mejor vendedor.',
      cta: 'Quiero más clientes',
      tag: 'Para negocios locales que crecen'
    },
    benefits: [
      {
        title: 'Prueba social instantánea',
        desc: 'Un cliente satisfecho deja reseña en 5 seg. El siguiente te elige a ti.',
        icon: '🛠️',
        img: '/images/services/b1.webp',
        imgAlt: 'Celular con la ficha del taller: más de 200 reseñas y 4.9 estrellas'
      },
      {
        title: 'Cotización sin llamadas perdidas',
        desc: 'Portal con WhatsApp directo y botón de cotizar.',
        icon: '💬',
        img: '/images/services/b2.webp',
        imgAlt: 'Pantalla de WhatsApp para pedir cotización junto a la placa NFC del taller'
      },
      {
        title: 'Más que reseñas, leads',
        desc: 'Maps + reseña + WhatsApp = embudo completo en un tap.',
        icon: '🚀',
        img: '/images/services/b3.webp',
        imgAlt: 'Diagrama del recorrido del cliente: llega al taller, deja reseña y se convierte en contacto'
      }
    ],
    portal: [
      { id: 'resena', label: 'Dejar reseña en Google' },
      { id: 'cotizar', label: 'Cotizar por WhatsApp' },
      { id: 'maps' },
      { id: 'portafolio', label: 'Portafolio de trabajos' },
      { id: 'video-servicio' },
      { id: 'factura' }
    ],
    packages: [
      { name: 'Start', plates: '2 placas servicio', price: '999', old: '1,299', features: ['Uso rudo, exterior', 'Portal multi-acción', 'Logo incluido'] },
      { name: 'Pro Local', plates: '5 placas + tarjetas', price: '1,899', popular: true, old: '2,500', features: ['Taller, caja, entrega', '20 tarjetas mecánico', 'Soporte Maps'] },
      { name: 'Business', plates: '10 placas + póster + tótem', price: '3,299', old: '4,200', features: ['Multi-sucursal', 'Póster grande', 'Asesoría Google My Business'] }
    ],
    testimonial: [
      { name: 'Taller Rojas', biz: 'Puebla', metric: '210', metricLabel: 'reseñas (antes 19)', text: 'De 19 a 210 reseñas. Ahora nos llegan 3-4 clientes diarios solo por Maps.' },
      { name: 'Vet Patitas', biz: 'Querétaro', text: 'Los dueños dejan reseña con foto de su perrito. Es oro puro.' }
    ]
  },
  // 🆕 NUEVA VERTICAL: HOTELES / AIRBNB
  hotels: {
    id: 'hotels',
    label: 'Hoteles, Airbnb y Hospedaje',
    short: 'Hoteles',
    slug: 'hoteles',
    emoji: '🏨',
    color: '#7C3AED',
    colorSoft: '#F5F3FF',
    accent: '#D4AF37',
    images: {
      hero: '/images/hotels/hero.webp',
      heroAlt: 'Habitación de hotel con la placa NFC en el buró y un huésped usando el portal desde su celular',
      tile: '/images/hotels/hero.webp',
      tileAlt: 'Habitación de hotel con placa NFC en el buró',
      portal: '/images/hotels/portal.webp',
      portalAlt: 'Pantalla real del portal de un hotel: conectar WiFi sin contraseña, reseña en Airbnb y Google, guía local y check-out tardío'
    },
    video: {
      src: '/images/hotels/video.mp4',
      poster: '/images/hotels/video-poster.webp',
      label: 'Demo real en un hotel boutique',
      title: 'El huésped conecta el WiFi y te deja 5 estrellas',
      sub: 'Un tap al llegar: WiFi sin contraseña. Otro al salir: reseña en Google y Airbnb. Tu rating sube sin que pidas nada.',
      bullets: [
        'WiFi conectado sin dictar la contraseña',
        'Guía local de restaurantes, tours y transporte',
        'Reseña en el check-out, cuando están contentos'
      ]
    },
    hero: {
      title: '¡Convierte cada check-out en una reseña 5 estrellas y más huéspedes!',
      highlight: 'reseña 5 estrellas',
      sub: 'La placa NFC que en un tap da WiFi, guía de la ciudad, check-out, reseña y reserva directa. Sin apps, sin fricción.',
      cta: 'Quiero más huéspedes',
      tag: 'Top en Airbnb y boutique'
    },
    benefits: [
      {
        title: 'WiFi sin decir la contraseña',
        desc: 'El huésped toca y se conecta. Adiós al "¿cuál es la clave?" 20 veces al día.',
        icon: '📶',
        img: '/images/hotels/b1.webp',
        imgAlt: 'Pantalla para conectarse al WiFi del hotel con un toque en la placa NFC'
      },
      {
        title: 'Reseña en el momento perfecto',
        desc: 'Justo al check-out, cuando están contentos. Sube tu rating en Airbnb y Google.',
        icon: '⭐',
        img: '/images/hotels/b2.webp',
        imgAlt: 'Celular mostrando la reseña del hotel: experiencia excelente y más de 200 reseñas'
      },
      {
        title: 'Guía local que enamora',
        desc: 'Restaurantes, tours, transporte. Tu portal se vuelve el conserje digital.',
        icon: '🗺️',
        img: '/images/hotels/b3.webp',
        imgAlt: 'Celular con el mapa de recomendaciones y la guía de la ciudad del hotel'
      }
    ],
    portal: [
      { id: 'resena', label: 'Reseña Google / Airbnb' },
      { id: 'wifi', label: 'Conectar WiFi sin contraseña' },
      { id: 'guia' },
      { id: 'restaurantes-cerca', label: 'Restaurantes cerca' },
      { id: 'taxi' },
      { id: 'whatsapp', label: 'WhatsApp recepción' },
      { id: 'checkout' }
    ],
    packages: [
      { name: 'Habitación', plates: '1 placa escritorio', price: '899', old: '1,199', features: ['Diseño hotelero', 'WiFi + reseña + guía', 'Logo del hotel'] },
      { name: 'Suite Boutique', plates: '5 placas + 1 recepción', price: '1,999', popular: true, old: '2,600', features: ['Habitaciones + lobby', 'Portal multi-idioma', 'Soporte prioritario'] },
      { name: 'Cadena Hotelera', plates: '10 placas + tótem', price: '3,499', old: '4,500', features: ['Multi-piso', 'Tótem recepción', 'Dashboard reseñas'] }
    ],
    testimonial: [
      { name: 'Ana G.', biz: 'Casa Roma Airbnb', metric: '4.95', metricLabel: 'de rating en 3 meses (antes 4.6)', text: 'Pasé de 4.6 a 4.95 en 3 meses. Los huéspedes dejan reseña al salir, sin que yo pida nada.' },
      { name: 'Hotel Boutique Nube', biz: 'San Miguel', metric: '-30', metricLabel: 'llamadas al día', text: 'El WiFi por NFC nos quitó 30 llamadas diarias. El staff respira.' }
    ]
  }
};

/* ============================================================
   LA SUITE
   El portal no es una lista de botones: es un catálogo de
   herramientas. Cada giro incluye su propio juego, y varias se
   repiten entre giros con textos distintos.
   ============================================================ */

export const toolGroups = [
  {
    id: 'reputacion',
    label: 'Reseñas y reputación',
    icon: '⭐',
    desc: 'Lo que convierte a un cliente satisfecho en una reseña pública y en material que convence al siguiente.',
    tools: ['resena', 'antes-despues', 'portafolio', 'video-servicio']
  },
  {
    id: 'atencion',
    label: 'Atención y citas',
    icon: '💬',
    desc: 'Todo lo que tu cliente necesita resolver sin llamarte y sin esperar a que abras.',
    tools: ['cita', 'whatsapp', 'cotizar', 'indicaciones', 'checkout']
  },
  {
    id: 'cobros',
    label: 'Cobros y propinas',
    icon: '💳',
    desc: 'Cobra y agradece en el mismo tap, sin datáfono extra ni efectivo de por medio.',
    tools: ['propina', 'pagar', 'factura']
  },
  {
    id: 'informacion',
    label: 'Información y ubicación',
    icon: '📍',
    desc: 'Lo que te preguntan veinte veces al día, resuelto en un toque y siempre al día.',
    tools: ['menu', 'wifi', 'guia', 'restaurantes-cerca', 'taxi', 'maps']
  },
  {
    id: 'fidelizacion',
    label: 'Fidelización',
    icon: '🎁',
    desc: 'El motivo concreto para volver y para traerte a alguien nuevo.',
    tools: ['instagram', 'cupon']
  }
];

export const tools = {
  resena: {
    icon: '⭐',
    name: 'Dejar reseña',
    desc: 'Abre tu ficha de Google con el formulario de reseña ya listo para calificar.',
    giros: ['restaurants', 'doctors', 'beauty', 'services', 'hotels']
  },
  'antes-despues': {
    icon: '🪞',
    name: 'Antes y después',
    desc: 'Muestra el resultado y pide permiso para publicarlo en tus redes.',
    giros: ['beauty']
  },
  portafolio: {
    icon: '📸',
    name: 'Portafolio de trabajos',
    desc: 'Tus mejores trabajos a la vista, para convencer antes de cotizar.',
    giros: ['services']
  },
  'video-servicio': {
    icon: '🎥',
    name: 'Video del servicio',
    desc: 'Un clip corto de cómo trabajas, para que confíen antes de dejarte el coche.',
    giros: ['services']
  },
  cita: {
    icon: '📅',
    name: 'Agendar cita',
    desc: 'El cliente reserva o reagenda su próxima visita sin llamarte.',
    giros: ['doctors', 'beauty']
  },
  whatsapp: {
    icon: '💬',
    name: 'WhatsApp directo',
    desc: 'Abre el chat contigo, con el mensaje ya empezado.',
    giros: ['doctors', 'hotels']
  },
  cotizar: {
    icon: '🧾',
    name: 'Cotizar',
    desc: 'Pide presupuesto por WhatsApp con fotos del problema, sin llamadas perdidas.',
    giros: ['services']
  },
  indicaciones: {
    icon: '📄',
    name: 'Indicaciones post-consulta',
    desc: 'Los cuidados que debe seguir en casa, sin imprimir una sola hoja.',
    giros: ['doctors']
  },
  checkout: {
    icon: '🧳',
    name: 'Check-out express',
    desc: 'Deja la habitación y cierra la cuenta sin pasar por recepción.',
    giros: ['hotels']
  },
  propina: {
    icon: '💜',
    name: 'Propina digital',
    desc: 'Agradece al staff con montos sugeridos de 20, 50 o 100 pesos.',
    giros: ['restaurants']
  },
  pagar: {
    icon: '💳',
    name: 'Pagar',
    desc: 'Cobra la consulta o el servicio sin datáfono adicional.',
    giros: ['doctors', 'beauty']
  },
  factura: {
    icon: '🧾',
    name: 'Pedir factura',
    desc: 'El cliente pide su CFDI con sus datos fiscales guardados.',
    giros: ['services']
  },
  menu: {
    icon: '📖',
    name: 'Menú digital',
    desc: 'La carta siempre al día: cambias un precio y se actualiza solo.',
    giros: ['restaurants']
  },
  wifi: {
    icon: '📶',
    name: 'Conectar WiFi',
    desc: 'El huésped se conecta sin que le dictes la contraseña.',
    giros: ['hotels']
  },
  guia: {
    icon: '🗺️',
    name: 'Guía de la ciudad',
    desc: 'Restaurantes, tours y transporte recomendados por ti.',
    giros: ['hotels']
  },
  'restaurantes-cerca': {
    icon: '🍽️',
    name: 'Dónde comer cerca',
    desc: 'Tus recomendaciones de la zona, en el bolsillo del huésped.',
    giros: ['hotels']
  },
  taxi: {
    icon: '🚕',
    name: 'Pedir taxi o Uber',
    desc: 'Sale a la puerta con el viaje ya pedido.',
    giros: ['hotels']
  },
  maps: {
    icon: '📍',
    name: 'Cómo llegar',
    desc: 'Abre la ruta en Maps o Waze con un solo toque.',
    giros: ['restaurants', 'doctors', 'services']
  },
  instagram: {
    icon: '📸',
    name: 'Instagram',
    desc: 'Sigue tu cuenta y etiqueta el resultado de su visita.',
    giros: ['restaurants', 'beauty']
  },
  cupon: {
    icon: '🎁',
    name: 'Cupón para volver',
    desc: 'Un motivo concreto para la próxima visita.',
    giros: ['restaurants', 'beauty']
  }
};

export const suite = {
  eyebrow: 'La suite',
  // ⚠️ Titular editorial: si añades o quitas herramientas, ajusta el número en
  // palabras aquí. Las cifras de abajo sí se calculan solas.
  title: 'Un producto. Cinco giros. Veinte herramientas.',
  sub: 'El hardware es idéntico en todos: lo que cambia es el portal, los textos y el acabado de tu placa. Elige tu giro y mira exactamente qué te toca.',
  stats: [
    { k: String(Object.keys(verticals).length), v: 'giros cubiertos' },
    { k: String(Object.keys(tools).length), v: 'herramientas de portal' },
    { k: '1', v: 'placa por negocio' },
    { k: '0', v: 'suscripciones' }
  ]
};

/* ============================================================
   GALERÍA DE GIROS
   ============================================================ */
export const showcase = {
  product: {
    src: '/images/producto/bodegon.webp',
    alt: 'Las cinco placas NFC Reviews MX, una por tipo de negocio: restaurantes, clínicas, belleza, servicios y hoteles',
    caption: 'Una placa por giro, en el color de tu marca y con tu logo grabado',
    points: ['Grabado de tu logo incluido', 'NFC + QR en la misma placa', 'Sin baterías ni suscripción'],
    details: [
      {
        src: '/images/producto/detalle-frente.webp',
        title: 'Frente cepillado',
        desc: 'Acero cepillado con marco y tu logo grabado a láser.'
      },
      {
        src: '/images/producto/detalle-qr.webp',
        title: 'QR láser al reverso',
        desc: 'Respaldo para celulares sin NFC o con la lectura bloqueada.'
      },
      {
        src: '/images/producto/detalle-adhesivo.webp',
        title: 'Adhesivo 3M™ 300LSE',
        desc: 'Se pega a mesa, mostrador, espejo o cabecera. Aguanta limpieza diaria.'
      }
    ]
  }
};
