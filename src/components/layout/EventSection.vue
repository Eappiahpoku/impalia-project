<!--
  EventSection.vue
  Recent Events section for The Impalia Project homepage.
  - Displays 3 placeholder event cards in a responsive grid
  - Mobile-first design optimized for Ghanaian users
  - All styling via Tailwind utility classes
  - Ready for real content replacement later
  - <!-- ===== [HOVER EFFECTS] START ===== -->
  - Cards rotate 2.5 degrees right on hover with pink glow effect
  - <!-- ===== [HOVER EFFECTS] END ===== -->


<template>
  <div class="py-8 px-4">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Recent Events</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        See how The Impalia Project is making a difference in our community through impactful events and activities.
      </p>
    </div>
    
    <!-- ===== [THREE EVENT CARDS] START ===== -->
    <!-- Events Grid - Mobile first, then responsive -->
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Event Card 1: Car Wash & Bake Sale -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                    hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                    transition-all duration-300 ease-in-out transform">
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- Event Image Placeholder -->
          <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div class="text-center text-blue-600">
              <svg class="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm font-medium">Car Wash Event</p>
            </div>
          </div>
          
          <!-- Event Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-secondary font-medium">March 2024</span>
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Car Wash & Bake Sale</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm">
              Our very first fundraising event was a success! Students hosted a car wash and bake sale to raise money for future projects.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              SOS-HGIC Campus
            </div>
          </div>
        </div>

        <!-- Event Card 2: Community Soup Kitchen -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                    hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                    transition-all duration-300 ease-in-out transform">
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- Event Image Placeholder -->
          <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
            <div class="text-center text-green-600">
              <svg class="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <p class="text-sm font-medium">Community Service</p>
            </div>
          </div>
          
          <!-- Event Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-secondary font-medium">April 2024</span>
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Community Soup Kitchen</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm">
              We prepared and served free meals to over 100 community members in need. A heartwarming day of service and connection.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Tema Community Center
            </div>
          </div>
        </div>

        <!-- Event Card 3: School Supply Drive -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                    hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                    transition-all duration-300 ease-in-out transform">
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- Event Image Placeholder -->
          <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
            <div class="text-center text-purple-600">
              <svg class="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              <p class="text-sm font-medium">Education Drive</p>
            </div>
          </div>
          
          <!-- Event Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-secondary font-medium">May 2024</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Ongoing</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">School Supply Drive</h3>
            <p class="text-gray-600 mb-4 leading-relaxed text-sm">
              Collecting and distributing books, pens, and educational materials to underprivileged students across Greater Accra schools.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Multiple Locations
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- ===== [THREE EVENT CARDS] END ===== -->

    <!-- Call to Action Button -->
    <div class="text-center mt-12">
      <button class="bg-secondary hover:bg-[#d2beea] hover:text-secondary text-white px-8 py-3 rounded-impalia font-medium transition-colors duration-200 touch-target-min ">
        See All Events
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This component displays the Recent Events section on the homepage.
// Shows 3 event cards in a responsive grid layout.
// Mobile-first design optimized for Ghanaian users.
// ===== [HOVER EFFECTS] START ===== 
// Each card rotates 2.5 degrees to the right on hover with pink shadow glow
// ===== [HOVER EFFECTS] END ===== 

// ===== Future Enhancement Notes =====
// TODO: Replace with dynamic data from API
// TODO: Add image loading states
// TODO: Implement event filtering/categories
// TODO: Add share functionality for events
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>