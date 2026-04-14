<script setup>
// Componente visual actualizado con Nutrición Deportiva
</script>

<template>
    <section class="bg-nutri-bg py-20 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

            <div class="md:w-1/2">
                <h2 class="text-3xl md:text-4xl font-bold text-nutri-dark mb-6">
                    Sobre mi enfoque
                </h2>

                <h3 class="text-xl text-nutri-teal font-semibold mb-4">
                    Nutrición clínica y deportiva, adaptada a tu estilo de vida.
                </h3>

                <p class="text-gray-600 mb-4 leading-relaxed">
                    Mi objetivo es ayudarte a encontrar una forma de alimentarte que funcione para ti. Diseño planes
                    personalizados según tus metas, horarios y preferencias.
                </p>

                <p class="text-gray-600 mb-8 leading-relaxed font-medium">
                    Además, como <span class="text-nutri-green font-bold">especialista certificada en Nutrición
                        Deportiva</span>, te ayudo a potenciar tu rendimiento físico combinando alimentación y rutinas
                    de entrenamiento estratégicas.
                </p>

                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-nutri-green mr-3 text-xl">✔</span>
                        <span class="text-gray-700 font-medium">Planes personalizados y flexibles</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-nutri-green mr-3 text-xl">✔</span>
                        <span class="text-gray-700 font-medium">Mejora de rendimiento y composición corporal</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-nutri-green mr-3 text-xl">✔</span>
                        <span class="text-gray-700 font-medium">Rutinas de entrenamiento adaptadas a tus
                            objetivos</span>
                    </li>
                </ul>
            </div>

            <div class="md:w-1/2 flex justify-center w-full">
                <div
                    class="w-full max-w-md aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img src="https://via.placeholder.com/600x600/30b5a1/ffffff?text=Foto+de+Ale"
                        alt="Nutrióloga Alejandra Cervantes" class="w-full h-full object-cover" />
                </div>
            </div>

        </div>
    </section>
</template>