<!-- filepath: c:\Users\Edward Appiah Poku\Documents\development\impalia-project\src\views\HomeView.vue -->
<template>
  <!-- ===== Main Container ===== -->
  <div class="min-h-screen bg-white rounded-full">
    
   

    <HeroSection/>
     <MottoAnimation/>
    <AboutSection/>

    <!-- ===== Events Preview Section ===== -->
    <section id="events" class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventSection/>
      
      </div>
    </section>

    <ContactSection/>
    <FooterSection/>
   
  </div>
</template>

<script setup lang="ts">
import AboutSection from '@/components/layout/AboutSection.vue';
import ContactSection from '@/components/layout/ContactSection.vue';
import EventSection from '@/components/layout/EventSection.vue';
import FooterSection from '@/components/layout/FooterSection.vue';
import HeroSection from '@/components/layout/HeroSection.vue';
import MottoAnimation from '@/components/layout/Motto/MottoAnimation.vue';




</script>