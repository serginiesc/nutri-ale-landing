<script setup>
import PhotoPlaceholder from './PhotoPlaceholder.vue'
import CheckIcon from './CheckIcon.vue'
import { fotos } from '../data/site'

const puntos = [
    'Planes para maximizar la quema calórica en cycling',
    'Suplementación inteligente para deportistas',
    'Estrategias de recuperación muscular post-clase',
]
</script>

<template>
    <section id="sobre-mi" class="bg-nutri-bg py-20 px-6 scroll-mt-24">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
                <h2 class="text-3xl md:text-4xl font-bold text-nutri-dark mb-6">Más que una consulta</h2>
                <h3 class="text-xl text-nutri-teal font-semibold mb-4">Ciencia aplicada al sudor.</h3>

                <p class="text-gray-600 mb-6 leading-relaxed">
                    Como <span class="text-nutri-green font-bold">Nutrióloga Deportiva y Coach de Indoor Cycling</span>,
                    entiendo que tu alimentación no es solo para "verte bien", es para rendir al máximo en cada sprint y
                    cada montaña.
                </p>

                <ul class="space-y-4">
                    <li v-for="punto in puntos" :key="punto" class="flex items-start">
                        <CheckIcon class="text-nutri-green mr-3 w-5 h-5 mt-0.5" />
                        <span class="text-gray-600">{{ punto }}</span>
                    </li>
                </ul>
            </div>

            <div class="md:w-1/2 w-full">
                <div
                    class="w-full h-80 md:h-[28rem] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white">
                    <PhotoPlaceholder :src="fotos.about"
                        alt="Alejandra impartiendo una clase de indoor cycling o en consulta" />
                </div>
            </div>
        </div>
    </section>
</template>
