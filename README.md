# Landing — Alejandra Cervantes Nutrición

Landing page de una nutrióloga deportiva y coach de indoor cycling en Torreón, Coahuila.
Hecha con Vue 3 (`<script setup>`), Vite y Tailwind CSS.

## Arrancar el proyecto

```bash
npm install
npm run dev
```

Otros comandos: `npm run build` (genera `dist/`) y `npm run preview` (revisa el build).

## Qué se edita y dónde

Casi todo el contenido que cambia con el tiempo está en **`src/data/site.js`**:

- `contacto.telefono` — el número de WhatsApp usado por todos los botones.
- `redes` — enlaces de Instagram y Facebook. Si la `url` queda vacía, el botón
  no se muestra (en vez de llevar a un enlace roto).
- `fotos` — las fotos del sitio. Mientras valgan `null` se dibuja un marcador
  de "foto pendiente" en su lugar.

Los precios y lo que incluye cada paquete están en el arreglo `planes` de
`src/components/ServicesSection.vue`.

## Cómo poner las fotos

1. Guarda la imagen en `src/assets/` (por ejemplo `ale-hero.jpg`).
2. En `src/data/site.js`, impórtala arriba del archivo:
   ```js
   import fotoHero from '../assets/ale-hero.jpg'
   ```
3. Asígnala en el objeto `fotos`:
   ```js
   export const fotos = {
     hero: fotoHero,
     about: null,
   }
   ```

El marcador desaparece solo. Medidas sugeridas: **hero** vertical (~600x800 px)
y **about** horizontal o cuadrada (~800x600 px).

## Estructura

```
src/
  data/site.js                  Teléfono, redes y fotos
  components/
    HeroSection.vue             Menú, titular y credenciales
    TestimonialsSection.vue     Carrusel de testimonios (Swiper)
    AboutSection.vue            "Más que una consulta"
    ServicesSection.vue         Los 4 paquetes con su botón de WhatsApp
    ContactSection.vue          Mapa, redes y pie de página
    PhotoPlaceholder.vue        Marcador mientras no hay foto
```

## Pendientes antes de publicar

- [ ] Tomar y asignar las fotos (`fotos.hero` y `fotos.about`).
- [ ] Poner las URLs reales de Instagram y Facebook en `redes`.
- [ ] Sustituir los testimonios de ejemplo por testimonios reales.
- [ ] En `index.html`, descomentar el bloque final y poner el dominio real
      más una imagen `og-image.jpg` de 1200x630 px en `public/`.
