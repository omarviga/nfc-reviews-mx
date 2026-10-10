import React, { useEffect, useMemo, useState } from 'react';
import { verticals, showcase, suite, tools, toolGroups } from './data.js';
import { config, waLink } from './config.js';
import { initPixel, track } from './pixel.js';

/* Giro con el que abre la página. Se lee de la URL para que cada anuncio lleve
   al dueño a SU versión y no siempre a la de clínicas. Acepta el id interno
   (?giro=doctors) o el slug en español (?giro=clinicas). */
const giroDeLaUrl = () => {
  if (typeof window === 'undefined') return 'doctors';
  const pedido = (new URLSearchParams(window.location.search).get('giro') || '').toLowerCase().trim();
  if (!pedido) return 'doctors';
  const encontrado = Object.keys(verticals).find(
    (id) => id === pedido || verticals[id].slug === pedido
  );
  return encontrado || 'doctors';
};

/* ============================================================
   COMPONENTES AUXILIARES NUEVOS
   ============================================================ */

function WhatsAppFloat({ color, giro }) {
  return (
    <a
      href={waLink('Hola! Quiero información sobre placas NFC')}
      onClick={() => track('Contact', { content_category: giro, content_name: 'Botón flotante' })}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full grid place-items-center text-white shadow-2xl hover:scale-105 active:scale-95 transition"
      style={{ background: '#25D366' }}
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.71 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.43-8.43ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.24-.38a9.82 9.82 0 0 1-1.5-5.27c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 9.89 9.89c0 5.45-4.44 9.91-9.9 9.91Zm5.44-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}

function UrgencyBar({ color }) {
  const [cupos, setCupos] = useState(7);
  useEffect(() => {
    const t = setInterval(() => setCupos((c) => (c > 3 ? c - 1 : 7)), 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="w-full text-white text-[12px] font-bold tracking-wide" style={{ background: color }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-2 flex items-center justify-center gap-3 text-center">
        <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulseSoft" />
        <span>🔥 Promo lanzamiento: solo <b>{cupos} kits</b> con 20% OFF esta semana · Envío gratis a todo México</span>
      </div>
    </div>
  );
}

function ComparisonSection({ color, colorSoft }) {
  const rows = [
    { label: 'Fricción para el cliente', nfc: '1 tap (2 seg)', qr: 'Abrir cámara + escanear', manual: 'Pedir incómodo' },
    { label: 'Tasa de conversión típica', nfc: '32-45%', qr: '8-14%', manual: '2-4%' },
    { label: 'Funciona de noche / exterior', nfc: 'Sí, sin luz', qr: 'No (necesita luz)', manual: 'No aplica' },
    { label: 'Puede incluir WiFi, menú, pago', nfc: 'Sí, todo en 1', qr: 'Solo un link', manual: 'No' },
    { label: 'Se ve premium', nfc: 'Acero / dorado / logo', qr: 'Papel pegado', manual: 'Nada' },
    { label: 'Requiere app', nfc: 'No', qr: 'No', manual: 'No' }
  ];
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center max-w-[60ch] mx-auto">
          <div className="inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
            Comparativa real
          </div>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-extrabold tracking-tight leading-[0.9]">
            NFC vs. QR vs. <span style={{ color }}>pedir reseña a mano</span>
          </h2>
          <p className="mt-3 text-slate-600">
            No es lo mismo. Los números hablan: NFC convierte 3-4x más que un QR y hasta 10x más que pedirlo a mano.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-[20px] border border-slate-200">
          <table className="w-full text-[13px] md:text-[14px]">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="p-3 md:p-4 font-bold">Criterio</th>
                <th className="p-3 md:p-4 font-bold" style={{ color }}>
                  Placa NFC ★
                </th>
                <th className="p-3 md:p-4 font-bold text-slate-500">Solo QR</th>
                <th className="p-3 md:p-4 font-bold text-slate-500">Pedir a mano</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? 'bg-white' : 'bg-slate-50/40'}>
                  <td className="p-3 md:p-4 font-medium">{r.label}</td>
                  <td className="p-3 md:p-4 font-bold" style={{ background: colorSoft, color }}>
                    {r.nfc}
                  </td>
                  <td className="p-3 md:p-4 text-slate-500">{r.qr}</td>
                  <td className="p-3 md:p-4 text-slate-500">{r.manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RoiCalculator({ color, colorSoft }) {
  const [clientes, setClientes] = useState(120);
  const [ticket, setTicket] = useState(350);
  const convNfc = 0.38; // 38% conversión NFC
  const reviewsMes = Math.round(clientes * convNfc);
  const reviewsAnio = reviewsMes * 12;
  const clientesExtra = Math.round(reviewsMes * 0.15); // 15% de quienes reseñan vuelven o traen alguien
  const ingresoExtra = clientesExtra * ticket;

  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
              Calculadora de ROI
            </div>
            <h2 className="mt-4 text-[30px] md:text-[42px] font-extrabold tracking-tight leading-[0.92]">
              ¿Cuánto te deja <span style={{ color: '#FCD34D' }}>una sola placa NFC</span> al año?
            </h2>
            <p className="mt-3 text-white/70 text-[14px] leading-relaxed">
              Ajusta tus números. La placa se paga sola con los clientes nuevos que atrae en el primer mes.
            </p>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2">
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/60">
                  Clientes al mes: <span className="text-white">{clientes}</span>
                </span>
                <input
                  type="range" min="20" max="800" step="10"
                  value={clientes} onChange={(e) => setClientes(+e.target.value)}
                  className="h-11 w-full accent-amber-400 md:h-6"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/60">
                  Ticket promedio MXN: <span className="text-white">${ticket}</span>
                </span>
                <input
                  type="range" min="50" max="3000" step="50"
                  value={ticket} onChange={(e) => setTicket(+e.target.value)}
                  className="h-11 w-full accent-amber-400 md:h-6"
                />
              </label>
            </div>
          </div>
          <div className="rounded-[24px] bg-white text-slate-900 p-6 md:p-7 shadow-2xl">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Estimación con placa NFC
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-4" style={{ background: colorSoft }}>
                <div className="text-[26px] font-black" style={{ color }}>{reviewsMes}</div>
                <div className="text-[11px] text-slate-600 leading-tight mt-0.5">reseñas nuevas / mes</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-[26px] font-black">{reviewsAnio}</div>
                <div className="text-[11px] text-slate-600 leading-tight mt-0.5">reseñas / año</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-[26px] font-black">{clientesExtra}</div>
                <div className="text-[11px] text-slate-600 leading-tight mt-0.5">clientes nuevos / mes</div>
              </div>
              <div className="rounded-2xl p-4" style={{ background: colorSoft }}>
                <div className="text-[26px] font-black" style={{ color }}>
                  ${ingresoExtra.toLocaleString('es-MX')}
                </div>
                <div className="text-[11px] text-slate-600 leading-tight mt-0.5">ingreso extra / mes</div>
              </div>
            </div>
            <div className="mt-5 rounded-xl bg-slate-950 text-white p-3 text-[12px] leading-snug">
              💡 Con un paquete de <b>$1,499 MXN</b> recuperas la inversión en <b>{Math.max(1, Math.ceil(1499 / Math.max(1, ingresoExtra)))}</b> mes(es).
            </div>
            <button
              onClick={() => document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 w-full h-12 rounded-full text-white font-bold text-[13px] tracking-wide hover:scale-[1.01] transition"
              style={{ background: color }}
            >
              Quiero esos números →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection({ color, colorSoft }) {
  const items = [
    { t: 'Garantía 12 meses', d: 'Si la placa falla, te la reponemos sin costo.', i: '🛡️' },
    { t: 'Reemplazo NFC gratis', d: 'Si el chip se daña por uso normal, la cambiamos.', i: '🔄' },
    { t: 'Pago contra entrega', d: 'Disponible en CDMX, GDL y MTY.', i: '💵' },
    { t: 'Mockup antes de producir', d: 'Ves tu diseño aprobado antes de fabricar.', i: '🎨' },
    { t: 'Sin suscripción', d: 'El hardware es tuyo para siempre.', i: '🔓' },
    { t: 'Soporte WhatsApp', d: 'Respuesta en menos de 2 horas.', i: '💬' }
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center max-w-[60ch] mx-auto">
        <div className="inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
          Cero riesgo
        </div>
        <h2 className="mt-4 text-[30px] md:text-[44px] font-extrabold tracking-tight leading-[0.9]">
          Compra con <span style={{ color }}>total tranquilidad</span>
        </h2>
        <p className="mt-3 text-slate-600">
          No vendemos placas: vendemos resultados respaldados.
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.t} className="rounded-[20px] border border-slate-200 bg-white p-5 flex gap-3 hover:shadow-lg hover:-translate-y-0.5 transition">
            <div className="h-11 w-11 shrink-0 rounded-2xl grid place-items-center text-[20px] border"
                 style={{ background: colorSoft, borderColor: `${color}20` }}>
              {it.i}
            </div>
            <div>
              <div className="text-[15px] font-bold leading-tight">{it.t}</div>
              <div className="mt-1 text-[13px] text-slate-600 leading-relaxed">{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   GALERÍA DE GIROS — un producto, cinco tipos de negocio
   Cada tarjeta muestra la foto del giro y lo activa al hacer clic.
   ============================================================ */

function ShowcaseSection({ active, onSelect }) {
  const items = Object.values(verticals);
  const giro = verticals[active];
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center max-w-[62ch] mx-auto">
        <div className="inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
          {suite.eyebrow}
        </div>
        <h2 className="mt-4 text-[30px] md:text-[44px] font-extrabold tracking-tight leading-[0.9]">
          {suite.title}
        </h2>
        <p className="mt-3 text-slate-600">{suite.sub}</p>
      </div>

      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {suite.stats.map((s) => (
          <div key={s.v} className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center">
            <div className="text-[32px] md:text-[40px] font-black tracking-tighter leading-none" style={{ color: giro.color }}>
              {s.k}
            </div>
            <div className="mt-1.5 text-[11.5px] font-semibold text-slate-500 leading-tight">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              aria-pressed={isActive}
              className={`group relative overflow-hidden rounded-[22px] border text-left transition-all ${
                isActive ? 'shadow-xl' : 'border-slate-200 hover:shadow-lg'
              }`}
              style={{
                borderColor: isActive ? item.color : undefined,
                boxShadow: isActive ? `0 18px 40px -18px ${item.color}` : undefined
              }}
            >
              <img
                src={item.images.tile}
                alt={item.images.tileAlt}
                width="900"
                height="1125"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              {isActive && (
                <div
                  className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-black text-white shadow"
                  style={{ background: item.color }}
                >
                  Viendo
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <div className="flex items-center gap-1.5 text-white">
                  <span className="text-[16px]">{item.emoji}</span>
                  <span className="text-[13px] font-bold leading-none drop-shadow">{item.short}</span>
                </div>
                <div className="mt-1 text-[10.5px] leading-tight text-white/75 line-clamp-2">{item.label}</div>
                <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                  {item.portal.length} herramientas
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-bold text-white/90">
                  {isActive ? 'Giro activo' : 'Ver este giro'} <span aria-hidden>→</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   CATÁLOGO DE HERRAMIENTAS
   Las 20 herramientas del portal agrupadas por para qué sirven.
   Las del giro activo van destacadas con su propio texto; el
   resto se atenúan para que se vea el tamaño real del producto.
   ============================================================ */

function ToolCatalog({ active }) {
  const giro = verticals[active];
  const mias = new Set(giro.portal.map((p) => p.id));
  const total = Object.keys(tools).length;
  // En móvil arrancamos mostrando solo lo del giro: las 20 filas seguidas
  // alargan la página casi 2.000 px. En escritorio se ve el catálogo entero.
  const [soloMio, setSoloMio] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  const grupos = toolGroups
    .map((g) => ({ ...g, visibles: soloMio ? g.tools.filter((id) => mias.has(id)) : g.tools }))
    .filter((g) => g.visibles.length > 0);

  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
              Catálogo de herramientas
            </div>
            <h2 className="mt-4 text-[30px] md:text-[42px] font-extrabold tracking-tight leading-[0.9] max-w-[20ch]">
              {total} herramientas, cinco giros, una sola placa
            </h2>
          </div>
          <p className="text-[13.5px] text-slate-600 max-w-[40ch] leading-relaxed">
            {soloMio ? (
              <>
                Estas son las <b style={{ color: giro.color }}>{mias.size} herramientas</b> que incluye tu giro, con el
                texto que verá tu cliente.
              </>
            ) : (
              <>
                Tu giro incluye <b style={{ color: giro.color }}>{mias.size} de ellas</b> y van marcadas abajo. El resto
                son las que usan los otros giros: el mismo producto, adaptado.
              </>
            )}
          </p>
        </div>

        <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-white p-1">
          <button
            onClick={() => setSoloMio(true)}
            className={`rounded-full px-4 py-3.5 text-[12.5px] font-bold transition md:py-2 ${
              soloMio ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
            style={soloMio ? { background: giro.color } : undefined}
          >
            Las {mias.size} de mi giro
          </button>
          <button
            onClick={() => setSoloMio(false)}
            className={`rounded-full px-4 py-3.5 text-[12.5px] font-bold transition md:py-2 ${
              !soloMio ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
            style={!soloMio ? { background: giro.color } : undefined}
          >
            Las {total} herramientas
          </button>
        </div>

        <div className="mt-7 grid gap-5">
          {grupos.map((g) => {
            const enMiGiro = g.tools.filter((id) => mias.has(id)).length;
            return (
              <div key={g.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
                <div className="flex items-start gap-3 border-b border-slate-100 px-5 py-4 md:px-6">
                  <div
                    className="h-10 w-10 shrink-0 rounded-2xl grid place-items-center text-[18px] border"
                    style={{ background: giro.colorSoft, borderColor: `${giro.color}20` }}
                  >
                    {g.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[16px] font-bold leading-tight">{g.label}</div>
                    <div className="mt-0.5 text-[13px] text-slate-600 leading-snug">{g.desc}</div>
                  </div>
                  <div
                    className="ml-auto hidden shrink-0 whitespace-nowrap pl-4 text-[11px] font-bold md:block"
                    style={{ color: enMiGiro ? giro.color : '#94A3B8' }}
                  >
                    {enMiGiro}/{g.tools.length} en tu giro
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                  {g.visibles.map((id) => {
                    const t = tools[id];
                    const esMia = mias.has(id);
                    const propia = giro.portal.find((p) => p.id === id);
                    const nombre = (propia && propia.label) || t.name;
                    return (
                      <div
                        key={id}
                        className={`flex gap-3 border-b border-slate-100 px-5 py-4 md:px-6 ${esMia ? '' : 'opacity-50'}`}
                        style={esMia ? { background: giro.colorSoft } : undefined}
                      >
                        <div className="mt-0.5 text-[17px] leading-none">{t.icon}</div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-[13.5px] font-bold leading-tight">{nombre}</span>
                            {esMia && (
                              <span
                                className="rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-white"
                                style={{ background: giro.color }}
                              >
                                Tu giro
                              </span>
                            )}
                          </div>
                          <div className="mt-1 text-[12.5px] leading-snug text-slate-600">{t.desc}</div>
                          <div className="mt-2 flex items-center gap-1">
                            {t.giros.map((gid) => (
                              <span
                                key={gid}
                                title={verticals[gid].label}
                                className="h-3.5 w-3.5 rounded-full border border-white shadow-sm"
                                style={{ background: verticals[gid].color }}
                              />
                            ))}
                            <span className="ml-1 text-[10px] text-slate-400">
                              {t.giros.length === 5
                                ? 'todos los giros'
                                : t.giros.map((gid) => verticals[gid].short).join(' · ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* La placa física: el hardware que recibe el cliente */
function HardwareBand({ color }) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-center">
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute -inset-6 rounded-[40px] blur-3xl opacity-25" style={{ background: color }} />
            <img
              src={showcase.product.src}
              alt={showcase.product.alt}
              width="1000"
              height="1000"
              className="relative aspect-square w-full rounded-[26px] border border-white/10 object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-amber-300">
              El hardware
            </div>
            <h2 className="mt-3 text-[28px] md:text-[40px] font-extrabold leading-[0.95] tracking-tight">
              Una misma placa, grabada con <span className="text-amber-300">el logo de tu negocio</span>
            </h2>
            <p className="mt-3 text-white/70 text-[14px] leading-relaxed max-w-[52ch]">
              {showcase.product.caption}. Te las enviamos programadas y listas para pegar o atornillar.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {showcase.product.points.map((p) => (
                <div key={p} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-[12.5px] leading-snug">
                  <span className="mr-1.5 text-amber-300">✓</span>
                  {p}
                </div>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 h-12 px-6 rounded-full bg-white text-slate-900 font-bold text-[13px] tracking-wide hover:scale-[1.02] transition"
            >
              Ver paquetes y precios →
            </button>
          </div>
        </div>

        {/* detalle del producto */}
        <div className="mt-10 md:mt-14 grid sm:grid-cols-3 gap-4">
          {showcase.product.details.map((d) => (
            <div key={d.title} className="overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
              <img
                src={d.src}
                alt={d.title}
                width="800"
                height="800"
                className="aspect-square w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4 md:p-5">
                <div className="text-[14px] font-bold">{d.title}</div>
                <div className="mt-1 text-[12.5px] leading-snug text-white/65">{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Video de demostración: cada giro tiene su propio clip de 10 segundos */
function VideoSection({ v }) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 md:p-8 grid md:grid-cols-[270px_1fr] gap-6 md:gap-10 items-center">
        <div className="relative mx-auto w-[236px] md:w-[270px]">
          <div className="absolute -inset-5 rounded-[44px] blur-2xl opacity-30" style={{ background: v.color }} />
          <div className="relative rounded-[38px] border-[7px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
            <video
              className="aspect-[9/16] w-full object-cover"
              src={v.video.src}
              poster={v.video.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={v.video.label}
            />
          </div>
        </div>
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
            style={{ borderColor: `${v.color}40`, color: v.color }}
          >
            ● {v.video.label}
          </div>
          <h2 className="mt-4 text-[26px] md:text-[38px] font-extrabold tracking-tight leading-[0.95]">
            {v.video.title}
          </h2>
          <p className="mt-3 text-[14px] text-slate-600 leading-relaxed max-w-[54ch]">{v.video.sub}</p>
          <div className="mt-5 grid gap-2 max-w-[46ch]">
            {v.video.bullets.map((t) => (
              <div key={t} className="flex items-start gap-2 text-[13px] text-slate-700">
                <span
                  className="mt-0.5 h-5 w-5 shrink-0 rounded-full grid place-items-center text-[10px] text-white"
                  style={{ background: v.color }}
                >
                  ✓
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APP PRINCIPAL
   ============================================================ */

export default function App() {
  const [active, setActive] = useState(giroDeLaUrl);
  const [form, setForm] = useState({
    nombre: '', tipo: 'Clínica', ciudad: '', whatsapp: '', paquete: '', mensaje: ''
  });
  const [modal, setModal] = useState(false);
  const v = verticals[active];

  useEffect(() => {
    const map = {
      restaurants: 'Restaurante / Café',
      doctors: 'Clínica / Consultorio',
      beauty: 'Estética / Spa / Barbería',
      services: 'Servicio Profesional',
      hotels: 'Hotel / Airbnb'
    };
    setForm((f) => ({ ...f, tipo: map[active] }));
  }, [active]);

  // Píxel de Meta: se carga una sola vez (si hay ID en src/config.js).
  useEffect(() => {
    initPixel();
  }, []);

  // Sincronizamos la URL con el giro activo para que el enlace se pueda
  // compartir, y avisamos al píxel de qué giro está mirando.
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('giro', v.slug);
    window.history.replaceState(null, '', url);
    track('ViewContent', { content_category: v.id, content_name: v.label });
  }, [active, v]);

  const waMessage = useMemo(() => (
    `Hola! Quiero pedir placas NFC Reviews MX
Negocio: ${form.nombre}
Tipo: ${form.tipo}
Ciudad: ${form.ciudad}
Paquete: ${form.paquete}
WhatsApp: ${form.whatsapp}
Mensaje: ${form.mensaje}
Vertical origen: ${v.label}`
  ), [form, v]);

  const handleSubmit = (e) => {
    e.preventDefault();
    track('Lead', {
      content_category: v.id,
      content_name: form.paquete || 'sin paquete definido'
    });
    setModal(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100">
      {/* Top bar */}
      <div className="w-full bg-slate-950 text-white text-[11px] tracking-wide">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseSoft" />
            Envío nacional 24-48h • Sin suscripción • Hardware tuyo para siempre
          </span>
          <div className="hidden md:flex items-center gap-4 opacity-80">
            <span>Personalización de logo incluida</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Soporte por WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Urgency */}
      <UrgencyBar color={v.color} />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-black tracking-tighter">
              NFC
            </div>
            <div className="leading-[0.9]">
              <div className="font-extrabold tracking-tight text-[16px]">NFC Reviews MX</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                Placas Google Reviews
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[13px]">
            <span className="text-slate-500">¿Dudas?</span>
            <a
              href={waLink('Hola! Quiero información sobre placas NFC')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('Contact', { content_category: active, content_name: 'Header' })}
              className="font-semibold underline underline-offset-4"
            >
              WhatsApp {config.whatsappTexto}
            </a>
          </div>
        </div>

        {/* Vertical selector */}
        <div className="border-t border-slate-100 bg-white/90">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-2.5 md:py-3.5 flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[13px] font-bold tracking-tight">Elige tu negocio:</span>
              <span className="hidden md:inline text-[11px] text-slate-400">— cambia todo al instante</span>
              <span className="ml-auto text-[11px] text-slate-400 md:hidden" aria-hidden>desliza →</span>
            </div>
            <div className="flex w-full gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
              {Object.keys(verticals).map((key) => {
                const item = verticals[key];
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    aria-pressed={isActive}
                    className={`group relative flex shrink-0 items-center justify-start gap-2.5 rounded-full border px-3.5 py-3 text-[13px] font-semibold transition-all md:shrink md:px-4 md:py-2 md:text-[13.5px] ${
                      isActive ? 'text-white shadow-lg scale-[1.02]' : 'bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    style={{
                      background: isActive ? item.color : undefined,
                      borderColor: isActive ? item.color : '#E2E8F0',
                      boxShadow: isActive ? `0 8px 24px ${item.color}30` : undefined
                    }}
                  >
                    <span className="text-[16px]">{item.emoji}</span>
                    <span className="leading-tight text-left whitespace-nowrap">
                      <span className="md:hidden">{item.short}</span>
                      <span className="hidden md:inline">{item.label}</span>
                    </span>
                    {isActive && (
                      <span className="ml-auto hidden md:inline text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
                        Activo
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="animate-fadeIn">
        {/* HERO */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 pt-8 md:pt-14 pb-10 md:pb-16 grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide bg-white"
              style={{ borderColor: `${v.color}30`, color: v.color }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: v.color }} />
              {v.hero.tag}
              <span className="h-3 w-px bg-slate-200" />
              <span className="text-slate-500">Sin apps • Sin suscripción • Toca y listo</span>
            </div>

            <h1 className="mt-5 text-[32px] md:text-[54px] font-[800] leading-[0.92] tracking-[-0.04em]">
              {v.hero.title.split(v.hero.highlight)[0]}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: v.color }}>{v.hero.highlight}</span>
                <span className="absolute bottom-1 left-0 right-0 h-[0.45em] z-0 opacity-30" style={{ background: v.color }} />
              </span>
              {v.hero.title.split(v.hero.highlight)[1] || ''}
            </h1>

            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-slate-600 max-w-[52ch]">
              {v.hero.sub}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 px-6 rounded-full text-white font-bold text-[14px] tracking-wide shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: v.color }}
              >
                {v.hero.cta} →
              </button>
              <div className="flex items-center gap-2 text-[12px] text-slate-500">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full bg-slate-200 border-2 border-white grid place-items-center text-[10px]">★</div>
                  <div className="h-7 w-7 rounded-full bg-amber-200 border-2 border-white grid place-items-center text-[10px]">★</div>
                  <div className="h-7 w-7 rounded-full bg-slate-900 text-white border-2 border-white grid place-items-center text-[10px] font-bold">+1k</div>
                </div>
                <span>4.9/5 en Google • 1,200+ negocios</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[520px]">
              {[
                { k: '+217%', v: 'reseñas / mes' },
                { k: '5 seg', v: 'tiempo del tap' },
                { k: '0 apps', v: 'que descargar' }
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-slate-50 border border-slate-100 p-3">
                  <div className="text-[18px] font-extrabold tracking-tight" style={{ color: v.color }}>{s.k}</div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Foto del giro */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] blur-2xl opacity-30"
                 style={{ background: `radial-gradient(60% 60% at 50% 50%, ${v.color} 0%, transparent 70%)` }} />
            <div className="relative mx-auto w-full max-w-[440px] rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="relative">
                <img
                  src={v.images.hero}
                  alt={v.images.heroAlt}
                  width="900"
                  height="1125"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0"
                     style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0) 45%, rgba(15,23,42,0.55) 100%)' }} />

                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full" style={{ background: v.color }} />
                  {v.emoji} {v.label}
                </div>

                <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur">
                  <div className="h-10 w-10 shrink-0 rounded-xl grid place-items-center text-[18px]"
                       style={{ background: v.colorSoft, border: `1px solid ${v.color}20` }}>
                    {v.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-[12px]" style={{ color: '#FFC300' }}>★</span>
                      ))}
                      <span className="ml-1.5 text-[12px] font-bold">4.9 • 342 reseñas</span>
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      Un tap y tu cliente ya está en tu ficha de Google
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black text-white"
                       style={{ background: v.color }}>
                    NFC + QR
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 md:-left-7 top-24 rounded-2xl bg-white border border-slate-200 shadow-xl px-3 py-2 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-emerald-50 grid place-items-center">✅</div>
              <div>
                <div className="text-[11px] font-bold leading-none">Nueva reseña</div>
                <div className="text-[10px] text-slate-500">hace 2 min • 5★</div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight max-w-[18ch] leading-[0.95]">
                Hecho para <span style={{ color: v.color }}>{v.label.toLowerCase()}</span> que quieren llenar su negocio
              </h2>
              <div className="text-[13px] text-slate-500 max-w-[36ch]">
                No es una placa genérica. Cada vertical tiene portal, textos y botones diseñados para tu tipo de cliente.
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {v.benefits.map((b) => (
                <div key={b.title} className="group flex flex-col overflow-hidden rounded-[22px] bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="relative overflow-hidden">
                    <img
                      src={b.img}
                      alt={b.imgAlt}
                      width="840"
                      height="840"
                      className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0"
                         style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0) 55%, rgba(15,23,42,0.35) 100%)' }} />
                    <div className="absolute bottom-3 left-3 h-11 w-11 rounded-2xl grid place-items-center text-[20px] border bg-white/95 backdrop-blur"
                         style={{ borderColor: `${v.color}25` }}>
                      {b.icon}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <div className="text-[16px] font-bold leading-tight">{b.title}</div>
                    <div className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{b.desc}</div>
                    <div className="mt-auto pt-4 text-[11px] font-bold uppercase tracking-widest" style={{ color: v.color }}>
                      → Beneficio verificado
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO DEMO — un clip de 10 s por giro */}
        <VideoSection v={v} />

        {/* CÓMO FUNCIONA */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center max-w-[60ch] mx-auto">
            <div className="inline-flex rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
              Cómo funciona
            </div>
            <h2 className="mt-4 text-[30px] md:text-[44px] font-extrabold tracking-tight leading-[0.9]">
              De mesa vacía a reseña en <span style={{ color: v.color }}>3 pasos</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Tu cliente no descarga nada. Solo acerca el celular. El resto es magia blanca premium.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-[54px] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            {[
              { n: '01', t: 'Coloca tu placa', d: `En recepción, mesa o espejo. Acero, dorado o blanco según tu vertical ${v.short}.`, e: '📍' },
              { n: '02', t: 'Cliente toca 1 segundo', d: 'Se abre tu portal inteligente: reseña, WhatsApp, menú, reserva. Sin app.', e: '📲' },
              { n: '03', t: 'Llega la reseña + cliente', d: 'Más estrellas en Google, más clientes nuevos. Ciclo infinito de prueba social.', e: '⭐' }
            ].map((s) => (
              <div key={s.n} className="relative rounded-[24px] border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-slate-900 text-white grid place-items-center text-[22px] shadow-lg">
                  {s.e}
                </div>
                <div className="mt-3 text-[11px] font-black tracking-widest" style={{ color: v.color }}>{s.n}</div>
                <div className="mt-1 text-[18px] font-bold">{s.t}</div>
                <div className="mt-2 text-[13px] text-slate-600 leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* LA SUITE — cinco giros, un producto */}
        <ShowcaseSection
          active={active}
          onSelect={(id) => {
            setActive(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* CATÁLOGO DE HERRAMIENTAS */}
        <ToolCatalog active={active} />

        {/* PORTAL REAL — las pantallas del portal, giro por giro */}
        <section className="bg-slate-950 text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-amber-300">
                Portal inteligente • {v.portal.length} herramientas para {v.short.toLowerCase()}
              </div>
              <h2 className="mt-3 text-[30px] md:text-[42px] font-extrabold leading-[0.92] tracking-tight">
                No es solo reseña. Es tu <span className="text-amber-300">mini-app sin app</span> para cada cliente.
              </h2>
              <div className="mt-6 grid gap-2.5">
                {v.portal.map((p) => {
                  const t = tools[p.id];
                  return (
                    <div key={p.id} className="flex gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                      <div className="h-9 w-9 shrink-0 rounded-xl grid place-items-center text-[16px] bg-white/10">
                        {t.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[13.5px] font-bold leading-tight">{p.label || t.name}</div>
                        <div className="mt-0.5 text-[11.5px] leading-snug text-white/60">{t.desc}</div>
                      </div>
                      <div className="ml-auto hidden shrink-0 self-center text-[10px] uppercase tracking-widest text-white/35 sm:block">
                        tap
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex gap-2 flex-wrap">
                <div className="rounded-full bg-white/10 px-3 py-1 text-[11px]">Personalizable con tu logo</div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[11px]">Portal en el color de tu marca</div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[11px]">Sin apps que descargar</div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -inset-10 rounded-[48px] blur-2xl opacity-25" style={{ background: v.color }} />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_100px_-25px_rgba(0,0,0,0.8)]">
                <img
                  src={v.images.portal}
                  alt={v.images.portalAlt}
                  width="900"
                  height="900"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-slate-950/75 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulseSoft" />
                  Pantalla real del portal
                </div>
              </div>

              {v.images.portal2 && (
                <div className="absolute -bottom-8 -left-6 hidden w-[46%] overflow-hidden rounded-[20px] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] lg:block">
                  <img
                    src={v.images.portal2}
                    alt={v.images.portal2Alt}
                    width="900"
                    height="900"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* COMPARATIVA */}
        <ComparisonSection color={v.color} colorSoft={v.colorSoft} />

        {/* ROI */}
        <RoiCalculator color={v.color} colorSoft={v.colorSoft} />

        {/* EL HARDWARE */}
        <HardwareBand color={v.color} />

        {/* PAQUETES */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-tight leading-[0.9]">
                Paquetes sin suscripción, <span style={{ color: v.color }}>hardware tuyo</span>
              </h2>
              <p className="mt-2 text-slate-600 text-[14px] max-w-[50ch]">
                Paga una vez. Te llega listo con tu logo, QR y NFC programado. Sin mensualidades, sin letra chiquita.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
              ✅ Envío incluido • Personalización logo gratis
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {v.packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-[24px] border p-6 flex flex-col ${
                  p.popular
                    ? 'bg-slate-900 text-white border-slate-900 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] scale-[1.02]'
                    : 'bg-white border-slate-200'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-black tracking-widest uppercase text-slate-900"
                       style={{ background: v.accent || '#D4AF37' }}>
                    Más popular • {v.short}
                  </div>
                )}
                {p.img && (
                  <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[22px]">
                    <img
                      src={p.img}
                      alt={`Contenido del paquete ${p.name}: ${p.plates}`}
                      width="900"
                      height="900"
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="text-[13px] uppercase tracking-widest font-bold opacity-60">{p.plates}</div>
                <div className="mt-1 text-[22px] font-extrabold tracking-tight">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-[36px] font-black tracking-tighter">${p.price}</span>
                  <span className="text-[13px] opacity-60">MXN</span>
                  <span className="ml-auto text-[12px] line-through opacity-50">${p.old}</span>
                </div>
                <div className="mt-5 grid gap-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[13px]">
                      <span className="h-5 w-5 rounded-full grid place-items-center text-[10px]"
                            style={{
                              background: p.popular ? 'white' : v.colorSoft,
                              color: p.popular ? '#0F172A' : v.color
                            }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <button
                    onClick={() => {
                      setForm((f) => ({ ...f, paquete: `${p.name} - $${p.price}` }));
                      track('AddToCart', {
                        content_category: v.id,
                        content_name: p.name,
                        value: Number(String(p.price).replace(/[^0-9]/g, '')),
                        currency: 'MXN'
                      });
                      document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full h-11 rounded-full font-bold text-[13px] tracking-wide transition hover:scale-[1.02] ${
                      p.popular ? 'bg-white text-slate-900' : 'text-white'
                    }`}
                    style={{ background: p.popular ? 'white' : v.color }}
                  >
                    Elegir {p.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight">
                Lo que dicen negocios de {v.short.toLowerCase()} como el tuyo
              </h3>
              <div className="hidden md:flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {v.testimonial.map((t) => (
                <div key={t.name} className="rounded-[20px] bg-white border border-slate-200 p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full text-white grid place-items-center font-bold shadow-sm"
                         style={{ background: `linear-gradient(135deg, ${v.color}, ${v.accent || '#D4AF37'})` }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold leading-none">{t.name}</div>
                      <div className="text-[11px] text-slate-500">{t.biz}</div>
                    </div>
                    <div className="ml-auto text-[11px] px-2 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold">
                      Verificado Google
                    </div>
                  </div>
                  {t.metric && (
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-[34px] font-black leading-none tracking-tighter" style={{ color: v.color }}>
                        {t.metric}
                      </span>
                      <span className="text-[11.5px] font-semibold leading-tight text-slate-500">{t.metricLabel}</span>
                    </div>
                  )}
                  <div className="mt-3 text-[14px] leading-relaxed">“{t.text}”</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍA */}
        <GuaranteeSection color={v.color} colorSoft={v.colorSoft} />

        {/* PEDIDO */}
        <section id="pedido" className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                 style={{ borderColor: `${v.color}30`, color: v.color }}>
              Pedido segmentado • {v.label}
            </div>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-extrabold tracking-tight leading-[0.9]">
              Haz tu pedido en 30 segundos, lo personalizamos con tu logo
            </h2>
            <p className="mt-3 text-[14px] text-slate-600 leading-relaxed max-w-[50ch]">
              Selecciona tu vertical y paquete. Te contactamos por WhatsApp con mockup gratis antes de producir. Sin pago anticipado si prefieres pago contra entrega en CDMX.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
              <div className="h-9 w-9 rounded-full bg-white border grid place-items-center">🛡️</div>
              <div className="text-[12px] leading-snug">
                <div className="font-bold">Campo oculto de segmentación activo</div>
                <div className="text-slate-600">
                  Detectamos que vienes de: <span className="font-bold" style={{ color: v.color }}>{v.label}</span> → el formulario ya está preseleccionado.
                  Personalizamos portal, colores y textos según tu giro.
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="min-w-0 rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-5 md:p-7">
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Nombre del negocio *</span>
                  <input
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Ej. Café Lú"
                    className="h-11 rounded-xl border border-slate-200 px-3.5 text-[14px] focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': v.color }}
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Tipo de negocio (preseleccionado)</span>
                  <select
                    value={form.tipo}
                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                    className="h-11 w-full min-w-0 rounded-xl border border-slate-200 px-3.5 text-[14px] bg-white"
                  >
                    <option>Restaurante / Café</option>
                    <option>Clínica / Consultorio</option>
                    <option>Estética / Spa / Barbería</option>
                    <option>Servicio Profesional</option>
                    <option>Hotel / Airbnb</option>
                    <option>Gimnasio / Fitness</option>
                    <option>Veterinaria</option>
                    <option>Taller / Autolavado</option>
                    <option>Otro</option>
                  </select>
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Ciudad *</span>
                  <input
                    required
                    value={form.ciudad}
                    onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                    placeholder="CDMX, GDL, MTY..."
                    className="h-11 rounded-xl border border-slate-200 px-3.5 text-[14px] focus:outline-none focus:ring-2"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">WhatsApp *</span>
                  <input
                    required
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    placeholder="Ej. 55 8765 4321"
                    className="h-11 rounded-xl border border-slate-200 px-3.5 text-[14px]"
                  />
                </label>
              </div>
              <label className="grid gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Paquete que te interesa</span>
                <select
                  value={form.paquete}
                  onChange={(e) => setForm({ ...form, paquete: e.target.value })}
                  className="h-11 w-full min-w-0 rounded-xl border border-slate-200 px-3.5 text-[14px] bg-white"
                >
                  <option value="">Selecciona paquete</option>
                  {v.packages.map((p) => (
                    <option key={p.name} value={`${p.name} - $${p.price}`}>
                      {p.name} • ${p.price} MXN • {p.plates}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Mensaje / Logo / Color preferido</span>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder={`Ej. Quiero 5 placas para ${v.short}, mi logo es dorado, color ${v.color}...`}
                  rows={3}
                  className="rounded-xl border border-slate-200 px-3.5 py-3 text-[14px] resize-none"
                />
              </label>
              <div className="rounded-xl bg-slate-950 text-white p-3 flex gap-2 text-[11px] leading-snug">
                <span>🔒</span>
                <span>
                  <b>Campo oculto:</b> vertical_origen = <b>{active}</b> • Se guarda para personalizar tu portal {v.label} y tu diseño.
                </span>
              </div>
              <button
                type="submit"
                className="h-[52px] rounded-full text-white font-black tracking-wide text-[14px] shadow-lg hover:scale-[1.01] active:scale-[0.99] transition"
                style={{ background: v.color }}
              >
                Hacer mi pedido por WhatsApp →
              </button>
              <div className="text-center text-[11px] text-slate-500">
                Al enviar, generamos tu mensaje pre-llenado. Sin spam, solo mockup y envío.
              </div>
            </div>
          </form>
        </section>
      </main>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setModal(false)} />
          <div className="relative w-full max-w-[480px] rounded-[24px] bg-white p-6 shadow-2xl animate-scaleIn">
            <div className="h-12 w-12 rounded-2xl grid place-items-center text-white text-[22px]" style={{ background: v.color }}>✓</div>
            <h3 className="mt-4 text-[20px] font-extrabold tracking-tight">¡Pedido listo para WhatsApp!</h3>
            <p className="mt-2 text-[13px] text-slate-600 leading-relaxed">
              Hemos preparado tu mensaje para <b>{v.label}</b>. Cópialo y envíalo a nuestro WhatsApp. Te respondemos con mockup en menos de 2 horas.
            </p>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-3 text-[12px] whitespace-pre-wrap leading-relaxed">
              {waMessage}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(waMessage)}
                className="h-11 rounded-full border border-slate-200 font-bold text-[13px]"
              >
                Copiar mensaje
              </button>
              <a
                href={waLink(waMessage)}
                onClick={() => track('Contact', { content_category: v.id, content_name: 'Modal del pedido' })}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 rounded-full grid place-items-center text-white font-bold text-[13px]"
                style={{ background: v.color }}
              >
                Abrir WhatsApp
              </a>
            </div>
            <button onClick={() => setModal(false)} className="mt-3 w-full text-[12px] text-slate-500">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp flotante */}
      <WhatsAppFloat color={v.color} giro={v.id} />

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-10 grid md:grid-cols-4 gap-8 text-[13px]">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">NFC</div>
              <span className="font-extrabold tracking-tight">NFC Reviews MX</span>
            </div>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Placas NFC premium para negocios que viven de Google Maps. Sin suscripción, hardware tuyo, personalización incluida.
            </p>
            <div className="mt-4 inline-flex rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold text-amber-800">
              Hecho en México • Envío nacional
            </div>
          </div>
          <div>
            <div className="font-bold">Verticales</div>
            <div className="mt-2 grid gap-0.5 text-slate-600">
              {Object.values(verticals).map((vv) => (
                <button
                  key={vv.id}
                  onClick={() => { setActive(vv.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="py-3 pr-2 text-left hover:text-slate-900"
                >
                  {vv.emoji} {vv.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-bold">Incluye siempre</div>
            <div className="mt-3 grid gap-1.5 text-slate-600">
              <span>✓ Sin suscripción, pago único</span>
              <span>✓ Personalización logo gratis</span>
              <span>✓ NFC + QR programado</span>
              <span>✓ Portal inteligente adaptable</span>
              <span>✓ Soporte WhatsApp</span>
            </div>
          </div>
          <div>
            <div className="font-bold">Contacto</div>
            <div className="mt-3 text-slate-600 leading-relaxed">
              <a
                href={waLink('Hola! Quiero información sobre placas NFC')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('Contact', { content_category: active, content_name: 'Pie de página' })}
                className="hover:text-slate-900"
              >
                WhatsApp: {config.whatsappTexto}
              </a>
              <br />
              CDMX • GDL • MTY • Todo México
              <br />
              <span className="mt-2 inline-block rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-bold">
                Respuesta en &lt; 2h
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 py-4 text-center text-[11px] text-slate-400">
          © 2026 NFC Reviews MX • Azul clínico #0E4DA4 • Naranja cálido #FF6B35 • Dorado #D4AF37 • Violeta hotelero #7C3AED
        </div>
      </footer>
    </div>
  );
}