<script setup>
// Muestra la foto si ya existe; si todavía no, dibuja un marcador
// con los colores de la marca en lugar de una imagen rota.
defineProps({
  src: { type: String, default: null },
  alt: { type: String, required: true },
  nota: { type: String, default: 'Foto pendiente' },
})
</script>

<template>
    <img v-if="src" :src="src" :alt="alt" class="object-cover w-full h-full" />

    <div v-else
        class="w-full h-full flex flex-col items-center justify-center gap-3 px-6 text-center bg-nutri-teal/5 border-2 border-dashed border-nutri-teal/25">
        <svg class="w-10 h-10 text-nutri-teal/40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
        </svg>
        <p class="text-nutri-teal/70 text-[11px] font-bold uppercase tracking-widest">{{ nota }}</p>
        <p class="text-gray-400 text-xs max-w-[16rem]">{{ alt }}</p>
    </div>
</template>
