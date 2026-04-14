<script setup>
const testimonials = [
    {
        id: 1,
        name: 'Karina Janeth Rodríguez',
        text: '¡La mejor nutri! Excelente humano, realmente le interesa que disfrutes el proceso y se nota que ama lo que hace (además nos consciente en nuestros antojos jeje) 100% la recomiendo.'
    },
    {
        id: 2,
        name: 'Zoé Perales',
        text: 'En verdad una gran nutrióloga y persona, me a apoyado mucho durante todo mi plan alimenticio, soy ama de casa y los planes los adapta a tu estilo de vida, siempre esta al pendiente de las dudas que puedas tener.'
    },
    {
        id: 3,
        name: 'Edwing Avalos',
        text: 'Me he sentido súper cómodo con los planes alimenticios, y los resultados han sido muy satisfactorios, aparte del trato al cliente que es excelente.'
    }
]
</script>

<template>
    <section class="bg-white py-20 px-6">
        <div class="max-w-6xl mx-auto">

            <h2 class="text-3xl md:text-4xl font-bold text-center text-nutri-dark mb-12">
                Lo que dicen mis pacientes
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div v-for="testimonial in testimonials" :key="testimonial.id"
                    class="bg-nutri-bg p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div class="text-nutri-teal text-4xl mb-4 font-serif">"</div>

                    <p class="text-gray-600 mb-6 italic">
                        {{ testimonial.text }}
                    </p>

                    <p class="text-nutri-dark font-bold">
                        {{ testimonial.name }}
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>