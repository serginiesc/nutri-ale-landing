<script setup>
import HeroSection from './components/HeroSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'; 
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <main>
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  </div>
</template>