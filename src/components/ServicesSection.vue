<script setup>
import { whatsapp } from '../data/site'
import CheckIcon from './CheckIcon.vue'

// Los 4 paquetes. Para cambiar precios o incluidos, edita solo este arreglo.
const planes = [
    {
        id: 'individual',
        nombre: 'Plan Individual',
        descripcion: 'Ideal para iniciar tu cambio de hábitos con un plan 100% personalizado.',
        precio: '$400 MXN',
        cta: 'Agendar plan individual',
        mensaje: 'Hola Ale, me interesa agendar el Plan Individual de $400.',
        incluye: ['Plan nutricional personalizado', 'Análisis corporal InBody'],
        destacado: false,
        estilos: {
            tarjeta: 'bg-white shadow-sm border border-gray-100',
            titulo: 'text-nutri-dark',
            descripcion: 'text-gray-500',
            precio: 'text-nutri-teal',
            boton: 'border-2 border-nutri-teal text-nutri-teal hover:bg-nutri-teal hover:text-white',
            item: 'text-gray-600',
        },
    },
    {
        id: 'deportivo',
        nombre: 'Plan Integral Deportivo',
        descripcion: 'Nutrición y rutina de ejercicio para potenciar tus resultados.',
        precio: '$500 MXN',
        cta: 'Agendar plan deportivo',
        mensaje: 'Hola Ale, quiero el Plan Integral Deportivo de $500.',
        incluye: ['Plan nutricional personalizado', 'Rutina de entrenamiento estructurada'],
        destacado: true,
        estilos: {
            tarjeta: 'bg-white shadow-lg border-2 border-nutri-green',
            titulo: 'text-nutri-dark',
            descripcion: 'text-gray-500',
            precio: 'text-nutri-green',
            boton: 'bg-nutri-green hover:bg-nutri-teal text-white shadow-md',
            item: 'text-gray-600',
        },
    },
    {
        id: 'pareja',
        nombre: 'Plan en Pareja',
        descripcion: 'Logren sus objetivos juntos con planes adaptados a cada uno.',
        precio: '$600 MXN',
        cta: 'Agendar en pareja',
        mensaje: 'Hola Ale, nos interesa agendar el Plan en Pareja de $600.',
        incluye: ['2 Planes nutricionales personalizados', 'Evaluación InBody para ambos'],
        destacado: false,
        estilos: {
            tarjeta: 'bg-white shadow-sm border border-gray-100',
            titulo: 'text-nutri-dark',
            descripcion: 'text-gray-500',
            precio: 'text-nutri-teal',
            boton: 'border-2 border-nutri-teal text-nutri-teal hover:bg-nutri-teal hover:text-white',
            item: 'text-gray-600',
        },
    },
    {
        id: 'familiar',
        nombre: 'Plan Familiar',
        descripcion: 'Mejoren los hábitos en casa (hasta 4 integrantes).',
        precio: '$1,000 MXN',
        cta: 'Agendar plan familiar',
        mensaje: 'Hola Ale, queremos agendar el Plan Familiar de $1,000.',
        incluye: ['Evaluación para cada integrante', 'Estrategias de compras y cocina familiar'],
        destacado: false,
        estilos: {
            tarjeta: 'bg-nutri-dark text-white shadow-md',
            titulo: 'text-nutri-green',
            descripcion: 'text-gray-300',
            precio: 'text-white',
            boton: 'bg-nutri-teal hover:bg-nutri-green text-white',
            item: 'text-gray-300',
        },
    },
]
</script>

<template>
    <section id="servicios" class="bg-[#fdfbf7] py-20 px-6 scroll-mt-24">
        <div class="max-w-5xl mx-auto">

            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-nutri-dark mb-4">
                    Servicios y Consultas
                </h2>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                    Elige la opción que mejor se adapte a ti. Planes clínicos y deportivos diseñados para llevarte a tu
                    mejor versión, solo o acompañado.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="plan in planes" :key="plan.id" class="p-8 rounded-3xl flex flex-col relative"
                    :class="plan.estilos.tarjeta">

                    <span v-if="plan.destacado"
                        class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-nutri-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Recomendado
                    </span>

                    <h3 class="text-xl font-bold mb-2" :class="plan.estilos.titulo">{{ plan.nombre }}</h3>
                    <p class="mb-6 flex-grow text-sm" :class="plan.estilos.descripcion">{{ plan.descripcion }}</p>
                    <div class="text-2xl font-extrabold mb-6" :class="plan.estilos.precio">{{ plan.precio }}</div>

                    <a :href="whatsapp(plan.mensaje)" target="_blank" rel="noopener noreferrer"
                        class="w-full font-bold py-3 px-4 rounded-full transition duration-300 mb-6 text-center text-sm"
                        :class="plan.estilos.boton">
                        {{ plan.cta }}
                    </a>

                    <ul class="space-y-2">
                        <li v-for="beneficio in plan.incluye" :key="beneficio" class="flex items-start">
                            <CheckIcon class="text-nutri-green mr-2 w-4 h-4 mt-0.5" />
                            <span class="text-xs" :class="plan.estilos.item">{{ beneficio }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
