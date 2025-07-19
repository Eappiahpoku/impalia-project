<template>
<!-- ===== About Preview Section ===== -->
    <section id="about" class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Who We Are</h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a group of 20 SOS-HGIC students dedicated to addressing poverty and homelessness. 
            Through events like soup kitchens, donations, and awareness campaigns, we aim to make a lasting impact.
          </p>
        </div>
        <div class="mb-12">
        <MemberCarousel />
      </div>
        <div class="text-center">
          <button class="bg-secondary text-white px-8 py-4 rounded-impalia font-medium hover:bg-[#d2beea] hover:text-secondary transition-colors min-h-touch-min">
            Learn More
          </button>
        </div>
      </div>
    </section>

</template>

<script setup lang="ts">
import MemberCarousel from './MemberCarousel.vue';


</script>