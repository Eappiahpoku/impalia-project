<!--
  Navigation.vue
  Main navigation bar for The Impalia Project.
  - Uses Vue Router for navigation
  - Mobile-first, Ghana-optimized
  - Follows Impalia Project Development Guidelines
  - Shows solid underline for active and hovered navigation items without shifting
-->

<template>
  <nav class="bg-secondary shadow-md border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo + Brand Name -->
        <div class="flex items-center space-x-3">
          <img
            src="/impalia-logo.webp"
            alt="Impalia Project Logo"
            class="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <h1 class="text-xl md:text-2xl font-bold text-primary font-impalia">
            Impalia Project
          </h1>
        </div>

        <!-- ===== Desktop Navigation ===== -->
        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            class="text-primary font-large transition-all duration-300 border-b-4 border-transparent hover:border-white"
            exact-active-class="border-white"
          >Home</router-link>
          <router-link
            to="/events"
            class="text-primary font-large transition-all duration-300 border-b-4 border-transparent hover:border-white"
            exact-active-class="border-white"
          >Events</router-link>
          <router-link
            to="/about"
            class="text-primary font-large transition-all duration-300 border-b-4 border-transparent hover:border-white"
            exact-active-class="border-white"
          >About</router-link>
          <router-link
            to="/contact"
            class="text-primary font-large transition-all duration-300 border-b-4 border-transparent hover:border-white"
            exact-active-class="border-white"
          >Contact</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-primary hover:text-primary p-2" aria-label="Open navigation menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- ===== Mobile Navigation ===== -->
      <div v-show="isMobileMenuOpen" class="md:hidden pb-4">
        <div class="flex flex-col space-y-2">
          <router-link
            to="/"
            @click="closeMobileMenu"
            class="text-primary font-medium py-2 border-b-4 border-transparent hover:border-white transition-all duration-300"
            exact-active-class="border-white"
          >Home</router-link>
          <router-link
            to="/events"
            @click="closeMobileMenu"
            class="text-primary font-medium py-2 border-b-4 border-transparent hover:border-white transition-all duration-300"
            exact-active-class="border-white"
          >Events</router-link>
          <router-link
            to="/about"
            @click="closeMobileMenu"
            class="text-primary font-medium py-2 border-b-4 border-transparent hover:border-white transition-all duration-300"
            exact-active-class="border-white"
          >About</router-link>
          <router-link
            to="/contact"
            @click="closeMobileMenu"
            class="text-primary font-medium py-2 border-b-4 border-transparent hover:border-white transition-all duration-300"
            exact-active-class="border-white"
          >Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// ===== Mobile Navigation State =====
import { ref } from 'vue'
const isMobileMenuOpen = ref(false)

// ===== Mobile Menu Functions =====
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>