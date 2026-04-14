<script setup>
// Componente de Servicios con enlaces a WhatsApp personalizados
</script>

<template>
    <section class="bg-[#fdfbf7] py-20 px-6">
        <div class="max-w-5xl mx-auto">

            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-nutri-dark mb-4">
                    Servicios y Consultas
                </h2>
                <p class="text-gray-600 text-lg">
                    Elige la opción que mejor se adapte a ti. Consultas y mediciones diseñadas para acompañarte en cada
                    etapa de tu proceso.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div
                    class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
                    <h3 class="text-2xl font-bold text-nutri-dark mb-2">Análisis corporal InBody 270</h3>
                    <p class="text-gray-500 mb-6 flex-grow">Perfecto si solo deseas conocer tu composición corporal a
                        detalle.</p>

                    <div class="text-3xl font-extrabold text-nutri-teal mb-6">
                        $400 MXN
                    </div>

                    <a href="https://wa.me/528712629415?text=Hola%20Ale,%20me%20interesa%20agendar%20un%20análisis%20InBody%20de%20$400."
                        target="_blank" rel="noopener noreferrer"
                        class="w-full border-2 border-nutri-teal text-nutri-teal hover:bg-nutri-teal hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 mb-8 text-center inline-block cursor-pointer">
                        Agendar medición
                    </a>

                    <div>
                        <h4 class="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Incluye:</h4>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Grasa y músculo por segmentos</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Seguimiento de progreso en cada visita</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Resultados impresos y explicados en minutos</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="bg-white p-8 rounded-3xl shadow-lg border-2 border-nutri-green flex flex-col relative transform md:-translate-y-4">
                    <span
                        class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-nutri-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Más Popular
                    </span>

                    <h3 class="text-2xl font-bold text-nutri-dark mb-2">Consulta nutricional</h3>
                    <p class="text-gray-500 mb-6 flex-grow">Ideal si buscas un plan completo y acompañamiento
                        personalizado.</p>

                    <div class="text-3xl font-extrabold text-nutri-green mb-6">
                        $900 MXN
                    </div>

                    <a href="https://wa.me/528712629415?text=Hola%20Ale,%20quiero%20agendar%20la%20consulta%20nutricional%20completa%20de%20$900."
                        target="_blank" rel="noopener noreferrer"
                        class="w-full bg-nutri-green hover:bg-nutri-teal text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md mb-8 text-center inline-block cursor-pointer">
                        Agendar consulta
                    </a>

                    <div>
                        <h4 class="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Incluye:</h4>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Plan nutricional personalizado</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Análisis corporal InBody 270</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Asesoría vía WhatsApp durante tu proceso</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-nutri-green mr-2">✔</span>
                                <span class="text-gray-600 text-sm">Recomendaciones prácticas adaptadas a tu estilo de
                                    vida</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>