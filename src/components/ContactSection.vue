<script setup>
// Componente para mostrar la ubicación y redes sociales
</script>

<template>
    <section class="bg-nutri-dark text-white py-20 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
                <h2 class="text-3xl md:text-4xl font-bold text-nutri-green mb-6">
                    Visítame en el consultorio
                </h2>
                <p class="text-gray-300 mb-8 text-lg leading-relaxed">
                    Estoy lista para acompañarte en tu proceso. Agenda tu cita y visítame, o sígueme en mis redes
                    sociales para más tips de nutrición diaria.
                </p>

                <div class="flex gap-4 mb-8">
                    <a href="#"
                        class="bg-white/10 hover:bg-nutri-teal text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300">
                        IG
                    </a>
                    <a href="#"
                        class="bg-white/10 hover:bg-nutri-teal text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300">
                        FB
                    </a>
                </div>

                <p class="text-gray-400 text-sm">
                    📍 Torreón, Coahuila, México.
                </p>
            </div>

            <div class="bg-white p-2 rounded-3xl shadow-xl">
                <div class="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.3810867207562!2d-103.50328462388903!3d25.55898521695077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd96fa2d3bfbd%3A0x57aef1fe26939372!2sGeslo%20%22Centro%20de%20Negocios%22!5e0!3m2!1ses!2smx!4v1776193233196!5m2!1ses!2smx"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </section>

    <footer class="bg-[#1a1e21] text-gray-500 text-center py-6 text-sm">
        <p>Copyright © 2026 Alejandra Cervantes Nutrición | Desarrollado con 💚</p>
    </footer>
</template>