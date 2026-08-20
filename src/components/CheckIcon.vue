<template>
    <!-- Palomita en SVG y no el carácter "✔": ese glifo lo dibujan Windows y
         Android con su fuente de emoji a color, que ignora `text-nutri-green`
         y lo pinta morado. En SVG hereda el color con currentColor. -->
    <svg class="flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
</template>
