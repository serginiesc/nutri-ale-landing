<script setup>
import PhotoPlaceholder from './PhotoPlaceholder.vue'
import ArrowIcon from './ArrowIcon.vue'
import { fotos, whatsapp } from '../data/site'

const enlaceNav = whatsapp('Hola Ale, vi tu perfil de cycling y nutrición, me gustaría agendar.')
const enlaceCta = whatsapp('Hola Ale, quiero empezar. ¿Me cuentas cómo funcionan tus planes?')

const secciones = [
    { href: '#sobre-mi', texto: 'Sobre mí' },
    { href: '#servicios', texto: 'Servicios' },
    { href: '#contacto', texto: 'Contacto' },
]

const credenciales = [
    { icono: '🏆', color: 'text-nutri-green', titulo: 'Nutrición Deportiva', detalle: 'Certificación Internacional.', destacada: false },
    { icono: '🚴‍♀️', color: 'text-nutri-teal', titulo: 'Indoor Cycling', detalle: 'Coach Certificada de Ciclo Bajo Techo.', destacada: false },
    { icono: '⚡', color: 'text-nutri-teal', titulo: 'Rendimiento', detalle: 'Estrategias de pre y post entrenamiento.', destacada: true },
]
</script>

<template>
    <div class="bg-nutri-bg w-full">
        <nav class="max-w-7xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center gap-4">
            <div class="font-bold text-xl md:text-2xl text-nutri-dark">
                Alejandra<span class="text-nutri-green">Nutrición</span>
            </div>

            <div class="flex items-center gap-6 lg:gap-8">
                <ul class="hidden md:flex items-center gap-6 lg:gap-8">
                    <li v-for="seccion in secciones" :key="seccion.href">
                        <a :href="seccion.href"
                            class="text-sm font-semibold text-gray-500 hover:text-nutri-green transition-colors duration-300">
                            {{ seccion.texto }}
                        </a>
                    </li>
                </ul>

                <a :href="enlaceNav" target="_blank" rel="noopener noreferrer"
                    aria-label="Agenda tu consulta por WhatsApp"
                    class="border border-nutri-dark text-nutri-dark px-4 py-3 md:px-6 rounded-full hover:bg-nutri-dark hover:text-white transition duration-300 text-xs md:text-sm font-semibold flex items-center gap-2 whitespace-nowrap">
                    <span class="hidden sm:inline">Agenda Tu Consulta</span>
                    <span class="sm:hidden">Agendar</span>
                    <ArrowIcon class="w-3.5 h-3.5" />
                </a>
            </div>
        </nav>

        <section class="max-w-7xl mx-auto px-6 pt-6 pb-16 md:pt-10 md:pb-20">
            <div class="flex items-center justify-center gap-4 mb-6 md:mb-10">
                <div class="hidden sm:block h-6 w-[1px] bg-nutri-teal/30"></div>
                <span class="text-nutri-teal font-bold tracking-widest text-xs uppercase">Nutrición Deportiva & Indoor
                    Cycling</span>
                <div class="hidden sm:block h-6 w-[1px] bg-nutri-teal/30"></div>
            </div>

            <h1
                class="text-4xl md:text-7xl font-extrabold text-center text-nutri-dark leading-tight mb-10 md:mb-16 tracking-tight">
                Potencia tu rendimiento <br class="hidden md:block" /> dentro y fuera de la clase.
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div class="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                    <p class="text-gray-500 text-base md:text-lg leading-relaxed">
                        Planes nutricionales diseñados por una <strong class="text-nutri-dark">especialista y coach de
                            cycling</strong>. Aprende a darle a tu cuerpo el combustible exacto para tus metas.
                    </p>
                    <a :href="enlaceCta" target="_blank" rel="noopener noreferrer"
                        class="bg-nutri-green hover:bg-nutri-teal text-white font-bold py-3 px-6 rounded-full text-base md:text-lg transition duration-300 shadow-lg flex items-center gap-4">
                        Empezar Ahora <ArrowIcon class="w-5 h-5" />
                    </a>
                </div>

                <div
                    class="w-full h-[400px] md:h-[650px] bg-nutri-bg rounded-[2rem] overflow-hidden flex items-end justify-center relative shadow-xl border border-gray-100">
                    <PhotoPlaceholder :src="fotos.hero"
                        alt="Alejandra, nutrióloga deportiva y coach de indoor cycling" />
                </div>

                <div class="hidden md:flex flex-col gap-4">
                    <div v-for="credencial in credenciales" :key="credencial.titulo" class="p-5 rounded-3xl" :class="credencial.destacada
                        ? 'bg-nutri-teal/10 border border-nutri-teal/20'
                        : 'bg-white shadow-sm border border-gray-100'">
                        <div class="text-2xl mb-1" :class="credencial.color" aria-hidden="true">{{ credencial.icono }}
                        </div>
                        <h4 class="font-bold text-nutri-dark text-xs uppercase">{{ credencial.titulo }}</h4>
                        <p class="text-gray-500 text-[10px]">{{ credencial.detalle }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
