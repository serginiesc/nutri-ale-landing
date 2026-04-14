<template>
    <div class="bg-nutri-bg w-full">
        <nav class="max-w-7xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
            <div class="font-bold text-xl md:text-2xl text-nutri-dark">
                Alejandra<span class="text-nutri-green">Nutrición</span>
            </div>
            <a href="https://wa.me/528712629415?text=Hola%20Ale,%20vi%20tu%20perfil%20de%20cycling%20y%20nutrición,%20me%20gustaría%20agendar."
                target="_blank" rel="noopener noreferrer"
                class="border border-nutri-dark text-nutri-dark px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-nutri-dark hover:text-white transition duration-300 text-xs md:text-sm font-semibold flex items-center gap-2">
                <span class="hidden sm:inline">Agenda Tu Consulta</span> ↗
            </a>
        </nav>

        <section class="max-w-7xl mx-auto px-6 pt-6 pb-16 md:pt-10 md:pb-20">
            <div class="flex items-center justify-center gap-4 mb-6 md:mb-10">
                <div class="h-6 w-[1px] bg-nutri-teal/30"></div>
                <span class="text-nutri-teal font-bold tracking-widest text-xs uppercase">Nutrición Deportiva & Indoor
                    Cycling</span>
                <div class="h-6 w-[1px] bg-nutri-teal/30"></div>
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
                    <a href="https://wa.me/528712629415"
                        class="bg-nutri-green hover:bg-nutri-teal text-white font-bold py-3 px-6 rounded-full text-base md:text-lg transition duration-300 shadow-lg flex items-center gap-4">
                        Empezar Ahora ↗
                    </a>
                </div>

                <div
                    class="w-full h-[450px] md:h-[650px] bg-gray-200 rounded-[2rem] overflow-hidden flex items-end justify-center relative shadow-xl border border-gray-100">
                    <img src="https://via.placeholder.com/600x800/e2e8f0/94a3b8?text=Foto+Ale+Cycling"
                        alt="Nutrióloga Deportiva" class="object-cover w-full h-full" />
                </div>

                <div class="hidden md:flex flex-col gap-4">
                    <div class="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
                        <div class="text-nutri-green text-2xl mb-1">🏆</div>
                        <h4 class="font-bold text-nutri-dark text-xs uppercase">Nutrición Deportiva</h4>
                        <p class="text-gray-500 text-[10px]">Certificación Internacional.</p>
                    </div>
                    <div class="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
                        <div class="text-nutri-teal text-2xl mb-1">🚴‍♀️</div>
                        <h4 class="font-bold text-nutri-dark text-xs uppercase">Indoor Cycling</h4>
                        <p class="text-gray-500 text-[10px]">Coach Certificada de Ciclo Bajo Techo.</p>
                    </div>
                    <div class="bg-nutri-teal/10 p-5 rounded-3xl border border-nutri-teal/20">
                        <div class="text-nutri-teal text-2xl mb-1">⚡</div>
                        <h4 class="font-bold text-nutri-dark text-xs uppercase">Rendimiento</h4>
                        <p class="text-gray-500 text-[10px]">Estrategias de pre y post entrenamiento.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>