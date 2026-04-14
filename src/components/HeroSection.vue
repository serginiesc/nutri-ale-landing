<script setup>
// Hero optimizado para Mobile-First con enlace a WhatsApp
</script>

<template>
    <div class="bg-nutri-bg w-full">

        <div class="bg-nutri-teal text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide px-4">
            Agenda abierta por tiempo limitado - ¡Asegura tu lugar!
        </div>

        <nav class="max-w-7xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
            <div class="font-bold text-xl md:text-2xl text-nutri-dark">
                Alejandra<span class="text-nutri-green">Nutrición</span>
            </div>
            <a href="https://wa.me/528712629415?text=Hola%20Ale,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20agendar%20una%20consulta."
                target="_blank" rel="noopener noreferrer"
                class="border border-nutri-dark text-nutri-dark px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-nutri-dark hover:text-white transition duration-300 text-xs md:text-sm font-semibold flex items-center gap-2">
                <span class="hidden sm:inline">Agenda Tu Consulta</span> ↗
            </a>
        </nav>

        <section class="max-w-7xl mx-auto px-6 pt-6 pb-16 md:pt-10 md:pb-20">

            <div class="flex items-center justify-center gap-4 mb-6 md:mb-10">
                <div class="h-6 w-[1px] bg-nutri-teal/30"></div>
                <span class="text-nutri-teal font-bold tracking-widest text-xs uppercase">Nutrióloga Alejandra
                    Cervantes</span>
                <div class="h-6 w-[1px] bg-nutri-teal/30"></div>
            </div>

            <h1
                class="text-4xl md:text-7xl font-extrabold text-center text-nutri-dark leading-tight mb-10 md:mb-16 tracking-tight">
                Planes nutricionales <br class="hidden md:block" /> personalizados, creados para ti.
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">

                <div class="flex flex-col gap-8 items-center md:items-start">
                    <p class="text-gray-500 text-base md:text-lg leading-relaxed px-4 md:px-0">
                        Acompañamiento constante, análisis <strong class="text-nutri-dark">InBody 270</strong> y
                        estrategias diseñadas para ayudarte a construir hábitos sostenibles, sin restricciones ni
                        extremos.
                    </p>

                    <a href="https://wa.me/528712629415?text=Hola%20Ale,%20vengo%20de%20tu%20página%20web%20y%20me%20gustaría%20agendar%20una%20consulta."
                        target="_blank" rel="noopener noreferrer"
                        class="bg-nutri-teal hover:bg-nutri-green text-white font-bold py-3 px-6 rounded-full text-base md:text-lg transition duration-300 shadow-lg flex items-center gap-4 cursor-pointer">
                        Agendar Consulta
                        <span
                            class="bg-white text-nutri-teal rounded-full w-8 h-8 flex items-center justify-center font-bold">↗</span>
                    </a>
                </div>

                <div
                    class="w-full h-[450px] md:h-[600px] bg-gray-200 rounded-[2rem] overflow-hidden flex items-end justify-center relative shadow-sm border border-gray-100">
                    <img src="https://via.placeholder.com/600x800/e2e8f0/94a3b8?text=Foto+de+Ale" alt="Nutrióloga"
                        class="object-cover w-full h-full" />
                </div>

                <div class="hidden md:block bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                    <div class="flex text-yellow-400 text-xl mb-4 gap-1">
                        ★★★★★
                    </div>
                    <p class="text-gray-500 text-sm mb-8 leading-relaxed">
                        En verdad una gran nutrióloga y persona, me a apoyado mucho durante todo mi plan alimenticio,
                        soy ama de casa y los planes los adapta a tu estilo de vida.
                    </p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <span class="font-bold text-nutri-dark">Zoé Perales</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>