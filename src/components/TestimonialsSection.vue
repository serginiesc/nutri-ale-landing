<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];

const testimonials = [
    {
        id: 1,
        name: 'Sofía Valdés',
        tag: 'Voleibolista Universitaria',
        text: '¡Increíble cómo Ale adaptó mi plan a mis entrenamientos y las clases! Mis niveles de energía están a tope y logré bajar mi porcentaje de grasa sin pasar hambre. ¡La nutri más pro!'
    },
    {
        id: 2,
        name: 'Diego Martínez',
        tag: 'Entusiasta del Gym',
        text: 'Como alguien que vive en el gym, buscaba resultados reales. El plan deportivo me ayudó a ganar masa muscular y mi fuerza en el entrenamiento subió muchísimo. ¡Súper recomendada!'
    },
    {
        id: 3,
        name: 'Mateo Sánchez',
        tag: 'Runner & Crossfit',
        text: 'Ale no solo me dio una dieta, me enseñó a comer para mi primer medio maratón. Sus tips de suplementación son clave. Si buscas mejorar tu rendimiento, ella es la indicada.'
    },
    {
        id: 4,
        name: 'Valentina Ríos',
        tag: 'Fitness Lifestyle',
        text: 'Amo que los planes no son restrictivos. Logré mis metas físicas disfrutando mis salidas con amigos. Es súper profesional y entiende perfecto el balance que buscamos los jóvenes.'
    }
]
</script>

<template>
    <section class="bg-white py-20 px-6">
        <div class="max-w-6xl mx-auto">

            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-extrabold text-nutri-dark mb-4">
                    Comunidad <span class="text-nutri-green italic">#NutriAle</span>
                </h2>
                <p class="text-gray-500">Ellos ya están llevando su rendimiento al siguiente nivel.</p>
            </div>

            <Swiper :modules="modules" :slides-per-view="1" :space-between="30" :loop="true"
                :autoplay="{ delay: 4000, disableOnInteraction: false }" :pagination="{ clickable: true }" :breakpoints="{
                    '768': { slidesPerView: 2 },
                    '1024': { slidesPerView: 3 }
                }" class="pb-12">
                <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
                    <div
                        class="bg-nutri-bg p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col hover:border-nutri-green transition-colors duration-300">
                        <span
                            class="bg-nutri-teal/10 text-nutri-teal text-[10px] font-bold uppercase tracking-widest mb-4 w-fit px-3 py-1 rounded-full">
                            {{ testimonial.tag }}
                        </span>

                        <div class="text-nutri-green text-3xl mb-4 font-serif">"</div>

                        <p class="text-gray-600 mb-8 italic flex-grow leading-relaxed">
                            {{ testimonial.text }}
                        </p>

                        <div class="flex items-center gap-3 mt-auto">
                            <div class="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                            <p class="text-nutri-dark font-extrabold text-sm uppercase">
                                {{ testimonial.name }}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    </section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
    background-color: #cbd5e1;
    opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
    background-color: #7bc342;
    /* Cambiamos el color de los puntitos al verde principal */
}
</style> 