<script setup>
import { computed } from 'vue'
import { contacto, redes } from '../data/site'

// Solo mostramos las redes que ya tienen una url configurada.
const redesActivas = computed(() => redes.filter((red) => red.url))

const anio = new Date().getFullYear()
</script>

<template>
    <section id="contacto" class="bg-nutri-dark text-white py-20 px-6 scroll-mt-24">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
                <h2 class="text-3xl md:text-4xl font-bold text-nutri-green mb-6">
                    Visítame en el consultorio
                </h2>
                <p class="text-gray-300 mb-8 text-lg leading-relaxed">
                    Estoy lista para acompañarte en tu proceso. Agenda tu cita y visítame<template
                        v-if="redesActivas.length">, o sígueme en mis redes sociales para más tips de nutrición
                        diaria</template>.
                </p>

                <div v-if="redesActivas.length" class="flex gap-4 mb-8">
                    <a v-for="red in redesActivas" :key="red.id" :href="red.url" target="_blank" rel="noopener noreferrer"
                        :aria-label="`Sígueme en ${red.nombre}`"
                        class="bg-white/10 hover:bg-nutri-teal text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300">
                        {{ red.etiqueta }}
                    </a>
                </div>

                <p class="text-gray-400 text-sm">
                    <span aria-hidden="true">📍</span> {{ contacto.ciudad }}
                </p>
            </div>

            <div class="bg-white p-2 rounded-3xl shadow-xl">
                <div class="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100">
                    <iframe title="Ubicación del consultorio en Torreón, Coahuila"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.3810867207562!2d-103.50328462388903!3d25.55898521695077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd96fa2d3bfbd%3A0x57aef1fe26939372!2sGeslo%20%22Centro%20de%20Negocios%22!5e0!3m2!1ses!2smx!4v1776193233196!5m2!1ses!2smx"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </section>

    <footer class="bg-[#1a1e21] text-gray-400 text-sm border-t border-white/5">
        <div
            class="max-w-6xl mx-auto px-6 py-8 pb-28 md:pb-8 flex flex-col sm:flex-row items-center justify-center gap-y-1 gap-x-3 text-center">
            <p>© {{ anio }} Alejandra Cervantes Nutrición</p>
            <span class="hidden sm:inline text-gray-600" aria-hidden="true">|</span>
            <p>Desarrollado con <span aria-hidden="true">💚</span></p>
        </div>
    </footer>
</template>
