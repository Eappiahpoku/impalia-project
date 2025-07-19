<!--
  ContactView.vue
  Contact page for The Impalia Project.
  - Mobile-first design optimized for Ghanaian users
  - Professional and clean layout with multiple contact methods
  - Consistent with HomeView.vue structure and styling
  - All styling via Tailwind utility classes
  - Fully commented for learning
-->

<template>
  <!-- ===== Main Container ===== -->
  <div class="min-h-screen bg-white">
    
    <!-- ===== Contact Hero Section ===== -->
    <section class="bg-gradient-to-br from-secondary to-secondary/80 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-impalia">
          Get In Touch
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Ready to join our mission or have questions about The Impalia Project? We'd love to hear from you!
        </p>
        <!-- ===== [ANIMATED MOTTO] START ===== -->
        <div class="text-center">
          <MottoAnimation />
        </div>
        <!-- ===== [ANIMATED MOTTO] END ===== -->
      </div>
    </section>

    <!-- ===== Quick Contact Methods ===== -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Quick Contact</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Choose your preferred way to connect with us. We respond quickly on all platforms!
          </p>
        </div>
        
        <!-- ===== [CONTACT METHODS GRID] START ===== -->
        <!-- Contact methods in responsive grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <!-- Primary Contact Card -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-impalia p-8 text-center border border-blue-200">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3 font-impalia">Email Us</h3>
            <p class="text-gray-600 mb-6">
              Get detailed responses to your questions and inquiries.
            </p>
            <a 
              href="mailto:project.impalia@gmail.com"
              class="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-impalia font-medium transition-colors touch-target-min"
              aria-label="Send email to project.impalia@gmail.com"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              <span>project.impalia@gmail.com</span>
            </a>
          </div>

          <!-- School Contact Card -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-impalia p-8 text-center border border-green-200">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3 font-impalia">Visit Our School</h3>
            <p class="text-gray-600 mb-6">
              Find us at SOS-Hermann Gmeiner International College.
            </p>
            <a 
              href="https://www.soshgic.edu.gh"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-impalia font-medium transition-colors touch-target-min"
              aria-label="Visit SOS-HGIC website"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
              </svg>
              <span>SOS-HGIC Website</span>
            </a>
          </div>

        </div>
        <!-- ===== [CONTACT METHODS GRID] END ===== -->
      </div>
    </section>

    <!-- ===== Social Media Section ===== -->
    <section class="bg-gray-50 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Follow Our Journey</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events, activities, and impact stories on social media.
          </p>
        </div>

        <!-- ===== [SOCIAL MEDIA CARDS] START ===== -->
        <!-- Social media platforms grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Instagram Card -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
              <div class="text-center text-white">
                <svg class="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">Instagram</h3>
              <p class="text-gray-600 text-sm mb-3">Photos and stories from our events</p>
              <a 
                href="https://instagram.com/project.impalia"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-impalia text-sm font-medium transition-colors touch-target-min"
              >
                @project.impalia
              </a>
            </div>
          </div>

          <!-- TikTok Card -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-20 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
              <div class="text-center text-white">
                <svg class="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">TikTok</h3>
              <p class="text-gray-600 text-sm mb-3">Behind-the-scenes videos</p>
              <a 
                href="https://tiktok.com/@project.impalia"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-impalia text-sm font-medium transition-colors touch-target-min"
              >
                @project.impalia
              </a>
            </div>
          </div>

          <!-- Snapchat Card -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
              <div class="text-center text-white">
                <svg class="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.219.085.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624.009 11.99-5.367 11.99-11.09C24.007 5.36 18.641.009 12.017.009z"/>
                </svg>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">Snapchat</h3>
              <p class="text-gray-600 text-sm mb-3">Quick updates and snaps</p>
              <a 
                href="https://snapchat.com/add/team_impalia"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-impalia text-sm font-medium transition-colors touch-target-min"
              >
                team_impalia
              </a>
            </div>
          </div>

          <!-- WhatsApp Card (Ghana-specific) -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-20 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <div class="text-center text-white">
                <svg class="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488"/>
                </svg>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">WhatsApp</h3>
              <p class="text-gray-600 text-sm mb-3">Direct messages and updates</p>
              <a 
                href="https://wa.me/message/EXAMPLE"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-impalia text-sm font-medium transition-colors touch-target-min"
              >
                Message Us
              </a>
            </div>
          </div>

        </div>
        <!-- ===== [SOCIAL MEDIA CARDS] END ===== -->
      </div>
    </section>

    <!-- ===== Comprehensive Contact Information ===== -->
   

    <!-- ===== Response Time Information ===== -->
    <section class="bg-gray-900 text-white py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 font-impalia">Response Times</h2>
        <p class="text-white/80 max-w-2xl mx-auto mb-8">
          We're committed to getting back to you quickly. Here's what you can expect:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Email Response -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">Email</h3>
            <p class="text-white/80 text-sm">Usually within 24 hours</p>
          </div>

          <!-- Social Media Response -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">Social Media</h3>
            <p class="text-white/80 text-sm">Within a few hours</p>
          </div>

          <!-- WhatsApp Response -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">WhatsApp</h3>
            <p class="text-white/80 text-sm">Usually very quick!</p>
          </div>
        </div>
      </div>
    </section>
<div class="p-10"></div>
    <!-- ===== Footer Section ===== -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This is the Contact page for The Impalia Project.
// It provides comprehensive contact information and multiple ways to connect.
// Mobile-first design optimized for Ghanaian users with touch-friendly interactions.
// Professional and clean layout consistent with HomeView.vue structure.

// ===== Component Imports =====

import FooterSection from '@/components/layout/FooterSection.vue'
import MottoAnimation from '@/components/layout/Motto/MottoAnimation.vue'

// ===== Future Enhancement Notes =====
// TODO: Add contact form with offline support
// TODO: Implement WhatsApp Web API integration
// TODO: Add location map integration
// TODO: Include team availability calendar
// TODO: Add multilingual support for contact methods
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>