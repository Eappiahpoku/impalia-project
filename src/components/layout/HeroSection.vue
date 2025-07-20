<template>
<!-- ===== Hero Section ===== -->
    <section id="home" class="bg-white py-12 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <!-- Mobile: Image on top -->
          <div class="lg:hidden mb-8">
            <div class="aspect-square bg-gray-100 rounded-impalia flex items-center justify-center border-2 border-pink-500 hover:shadow-xl hover:shadow-secondary">
                  <!-- ===== [New Feature] START ===== -->
            <!-- Replace SVG placeholder with actual hero image -->
            <img
              src="/hero-pic.jpg"
              alt="Impalia Project Hero"
              class="w-full h-full object-cover rounded-impalia"
              loading="lazy"
            />
            <!-- ===== [New Feature] END ===== -->
              
            </div>
          </div>
          
          <!-- Text Content -->
          <div class="lg:pr-8">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-impalia">
              <WelcomeAnimation />
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              A student-led initiative from <a href="https://www.soshgic.edu.gh">SOS-HGIC</a> focused on fighting poverty and homelessness through hope-driven community actions.
            </p>
            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Join us as we raise funds, spread awareness, and create impact together.
            </p>
            <router-link
  to="/events"
  class="bg-secondary text-white px-8 py-4 rounded-impalia font-medium hover:bg-[#d2beea] hover:text-secondary transition-colors min-h-touch-min mx-auto block lg:inline-block text-center"
  aria-label="Learn more about our events"
>
  Learn More
</router-link>
          </div>
          
          <!-- Desktop: Image on right -->
          <div class="hidden lg:block">
            <div class="aspect-square bg-gray-100 rounded-impalia flex items-center justify-center border-2 border-pink-500 hover:shadow-xl hover:shadow-secondary">
                <!-- ===== [New Feature] START ===== -->
            <!-- Replace SVG placeholder with actual hero image -->
            <img
              src="/hero-pic.jpg"
              alt="Impalia Project Hero"
              class="w-full h-full object-cover rounded-impalia"
              loading="lazy"
            />
            <!-- ===== [New Feature] END ===== -->
              
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import WelcomeAnimation from './WelcomeAnimation.vue';


</script>