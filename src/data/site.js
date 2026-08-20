// Datos editables de la landing.
// Todo lo que hay que actualizar con el tiempo (teléfono, redes, fotos,
// precios) vive aquí para no ir tocando los componentes uno por uno.

export const contacto = {
  telefono: '528712629415',
  ciudad: 'Torreón, Coahuila, México',
}

// Enlaces a redes sociales.
// Si la url queda vacía el botón no se muestra, en lugar de llevar a "#".
export const redes = [
  { id: 'instagram', nombre: 'Instagram', etiqueta: 'IG', url: '' },
  { id: 'facebook', nombre: 'Facebook', etiqueta: 'FB', url: '' },
]

// Fotos de la sesión. Mientras sean null se dibuja un placeholder.
// Cuando tengas las fotos: guárdalas en src/assets, impórtalas arriba
// (por ejemplo `import fotoHero from '../assets/ale-hero.jpg'`) y
// asígnalas aquí. Los componentes cambian solos.
export const fotos = {
  hero: null,
  about: null,
}

// Construye el enlace de WhatsApp con el mensaje ya escrito.
export function whatsapp(mensaje) {
  const base = `https://wa.me/${contacto.telefono}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}
