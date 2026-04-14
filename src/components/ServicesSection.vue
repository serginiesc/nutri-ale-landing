<script setup>
// Componente de Servicios actualizado con 4 paquetes
</script>

<template>
    <section class="bg-[#fdfbf7] py-20 px-6">
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

                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 class="text-xl font-bold text-nutri-dark mb-2">Plan Individual</h3>
                    <p class="text-gray-500 mb-6 flex-grow text-sm">Ideal para iniciar tu cambio de hábitos con un plan
                        100% personalizado.</p>
                    <div class="text-2xl font-extrabold text-nutri-teal mb-6">$400 MXN</div>
                    <a href="https://wa.me/528710000000?text=Hola%20Ale,%20me%20interesa%20agendar%20el%20Plan%20Individual%20de%20$400."
                        target="_blank" rel="noopener noreferrer"
                        class="w-full border-2 border-nutri-teal text-nutri-teal hover:bg-nutri-teal hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-6 text-center text-sm">
                        Agendar plan individual
                    </a>
                    <div>
                        <ul class="space-y-2">
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-600 text-xs">Plan nutricional personalizado</span></li>
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-600 text-xs">Análisis corporal InBody</span></li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-3xl shadow-lg border-2 border-nutri-green flex flex-col relative">
                    <span
                        class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-nutri-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Recomendado</span>
                    <h3 class="text-xl font-bold text-nutri-dark mb-2">Plan Integral Deportivo</h3>
                    <p class="text-gray-500 mb-6 flex-grow text-sm">Nutrición y rutina de ejercicio para potenciar tus
                        resultados.</p>
                    <div class="text-2xl font-extrabold text-nutri-green mb-6">$500 MXN</div>
                    <a href="https://wa.me/528710000000?text=Hola%20Ale,%20quiero%20el%20Plan%20Individual%20con%20Entrenamiento%20de%20$500."
                        target="_blank" rel="noopener noreferrer"
                        class="w-full bg-nutri-green hover:bg-nutri-teal text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-md mb-6 text-center text-sm">
                        Agendar plan deportivo
                    </a>
                    <div>
                        <ul class="space-y-2">
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-600 text-xs">Plan nutricional personalizado</span></li>
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-600 text-xs">Rutina de entrenamiento estructurada</span></li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 class="text-xl font-bold text-nutri-dark mb-2">Plan en Pareja</h3>
                    <p class="text-gray-500 mb-6 flex-grow text-sm">Logren sus objetivos juntos con planes adaptados a
                        cada uno.</p>
                    <div class="text-2xl font-extrabold text-nutri-teal mb-6">$600 MXN</div>
                    <a href="https://wa.me/528710000000?text=Hola%20Ale,%20nos%20interesa%20agendar%20el%20Plan%20en%20Pareja%20de%20$600."
                        target="_blank" rel="noopener noreferrer"
                        class="w-full border-2 border-nutri-teal text-nutri-teal hover:bg-nutri-teal hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-6 text-center text-sm">
                        Agendar en pareja
                    </a>
                    <div>
                        <ul class="space-y-2">
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-600 text-xs">2 Planes nutricionales personalizados</span></li>
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-600 text-xs">Evaluación InBody para ambos</span></li>
                        </ul>
                    </div>
                </div>

                <div class="bg-nutri-dark text-white p-8 rounded-3xl shadow-md flex flex-col">
                    <h3 class="text-xl font-bold text-nutri-green mb-2">Plan Familiar</h3>
                    <p class="text-gray-300 mb-6 flex-grow text-sm">Mejoren los hábitos en casa (hasta 4 integrantes).
                    </p>
                    <div class="text-2xl font-extrabold text-white mb-6">$1,000 MXN</div>
                    <a href="https://wa.me/528710000000?text=Hola%20Ale,%20queremos%20agendar%20el%20Plan%20Familiar%20de%20$1000."
                        target="_blank" rel="noopener noreferrer"
                        class="w-full bg-nutri-teal hover:bg-nutri-green text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-6 text-center text-sm">
                        Agendar plan familiar
                    </a>
                    <div>
                        <ul class="space-y-2">
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-300 text-xs">Evaluación para cada integrante</span></li>
                            <li class="flex items-start"><span class="text-nutri-green mr-2">✔</span><span
                                    class="text-gray-300 text-xs">Estrategias de compras y cocina familiar</span></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>