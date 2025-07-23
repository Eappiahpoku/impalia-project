<!--
  ContactSection.vue
  Contact Us section for The Impalia Project homepage.
  - Displays 4 contact method cards in a responsive grid
  - Each card uses platform brand colors and icons
  - Hover effects with rotation and pink glow (consistent with event cards)
  - Mobile-first design optimized for Ghanaian users
  - Clickable cards that open respective platforms
  - All styling via Tailwind utility classes
-->

<template>
  <div class="py-8 px-4">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Contact Us</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Get in touch with The Impalia Project team through your preferred platform. We're here to help!
      </p>
    </div>
    
    <!-- ===== [FOUR CONTACT CARDS] START ===== -->
    <!-- Contact Cards Grid - Mobile first, then responsive -->
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Contact Card 1: Email -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <a 
          href="mailto:project.impalia@gmail.com"
          class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                 transition-all duration-300 ease-in-out transform
                 cursor-pointer block touch-target-min"
          aria-label="Send email to project.impalia@gmail.com"
        >
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- Gmail Brand Header -->
          <div class="h-20 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
            <div class="text-center text-white">
              <svg class="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              <p class="text-xs font-medium">Gmail</p>
            </div>
          </div>
          
          <!-- Contact Content -->
          <div class="p-4">
            <div class="text-center">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">📧 Email</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                project.impalia@gmail.com
              </p>
              <div class="mt-3">
                <span class="inline-block bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                  Send Message
                </span>
              </div>
            </div>
          </div>
        </a>

        <!-- Contact Card 2: Instagram -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <a 
          href="https://instagram.com/project.impalia"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                 transition-all duration-300 ease-in-out transform
                 cursor-pointer block touch-target-min"
          aria-label="Follow us on Instagram @project.impalia"
        >
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- Instagram Brand Header -->
          <div class="h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
            <div class="text-center text-white">
              <svg class="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <p class="text-xs font-medium">Instagram</p>
            </div>
          </div>
          
          <!-- Contact Content -->
          <div class="p-4">
            <div class="text-center">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">📸 Instagram</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                @project.impalia
              </p>
              <div class="mt-3">
                <span class="inline-block bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                  Follow Us
                </span>
              </div>
            </div>
          </div>
        </a>

        <!-- Contact Card 3: TikTok -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <a 
          href="https://tiktok.com/@project.impalia"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                 transition-all duration-300 ease-in-out transform
                 cursor-pointer block touch-target-min"
          aria-label="Follow us on TikTok @project.impalia"
        >
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- TikTok Brand Header -->
          <div class="h-20 bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
            <div class="text-center text-white">
              <svg class="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              <p class="text-xs font-medium">TikTok</p>
            </div>
          </div>
          
          <!-- Contact Content -->
          <div class="p-4">
            <div class="text-center">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">🎵 TikTok</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                @project.impalia
              </p>
              <div class="mt-3">
                <span class="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                  Watch Videos
                </span>
              </div>
            </div>
          </div>
        </a>

        <!-- Contact Card 4: Snapchat -->
        <!-- ===== [HOVER EFFECTS] START ===== -->
        <!-- Added rotate-2 on hover with pink shadow effect using secondary color -->
        <a 
          href="https://snapchat.com/add/team_impalia"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden 
                 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 
                 transition-all duration-300 ease-in-out transform
                 cursor-pointer block touch-target-min"
          aria-label="Add us on Snapchat team_impalia"
        >
        <!-- ===== [HOVER EFFECTS] END ===== -->
          <!-- Snapchat Brand Header -->
          <div class="h-20 flex items-center justify-center" style="background: linear-gradient(135deg, #FEFC00 0%, #fffc00 100%);">
           
           
<!-- ===== Snapchat Brand Header (with correct ghost SVG) ===== -->
<div class="text-center text-white">
  <!-- ===== Snapchat Brand Header (with correct ghost SVG) ===== -->
    <div class="text-center text-white">
      <!-- ===== [New Feature] START ===== -->
      <!-- Official Snapchat SVG icon for brand accuracy -->
      <svg
        class="w-8 h-8 mx-auto mb-1"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="512" cy="512" r="512" style="fill:#fffc00"/>
        <path d="M516.4 272.9c21.1 0 92.7 5.9 126.5 81.5 11.3 25.5 8.6 68.7 6.4 103.4l-.1 1.3c-.3 3.8-.5 7.4-.6 10.9 1.6 1 4.3 1.9 8.6 1.9 6.4-.3 14.1-2.6 22-6.4 3.5-1.9 7.3-2.2 9.9-2.2 3.9 0 7.7.6 10.9 1.9 9.6 3.2 15.7 10.2 15.7 17.9.3 9.6-8.3 17.9-25.9 24.9-1.9.6-4.5 1.6-7.3 2.5-9.6 2.9-24.3 7.7-28.4 17.3-1.9 4.8-1.3 11.2 2.6 18.5l.3.3c1.3 2.9 32.6 74.1 102.2 85.6 5.4.9 9.3 5.8 9 10.9 0 1.6-.3 3.2-1 4.8C762.1 660 740 669 700.1 675c-1.3 1.9-2.6 8-3.5 12.2-.6 3.8-1.6 7.7-2.9 11.8-1.6 5.8-5.8 8.6-11.8 8.6h-.6c-2.9 0-6.7-.7-11.5-1.6-7.7-1.6-16.3-2.9-27.2-2.9-6.4 0-12.8.3-19.5 1.6-12.8 2.2-24 9.9-36.8 18.9-18.2 12.8-39 27.5-70.3 27.5-1.3 0-2.5-.3-3.8-.3H509c-31.3 0-51.8-14.4-70-27.5-12.8-9-23.6-16.6-36.4-18.9-6.7-1-13.4-1.6-19.8-1.6-11.5 0-20.4 1.9-27.1 3.2-4.5.9-8.3 1.6-11.5 1.6-8 0-11.2-4.8-12.4-9-1.3-4.1-1.9-8.3-2.9-12.1-1-3.9-2.2-10.5-3.5-12.2-40.9-4.7-62.9-13.7-68-26.2-.7-1.3-1.1-3.2-1.2-4.8-.3-5.2 3.5-9.9 9-10.9 69.6-11.5 100.9-82.8 102.2-85.8l.3-.6c3.8-7.4 4.8-13.8 2.5-18.5-4.2-9.3-18.9-14-28.4-17.3-2.6-.6-5.1-1.6-7.4-2.5-23.6-9.3-26.8-19.8-25.5-27.2 1.9-10.2 14.4-16.9 24.9-16.9 3.1 0 5.8.6 8.2 1.6 9 4.1 16.8 6.4 23.6 6.4 5 0 8.2-1.3 9.9-2.2l-1-12.1c-2.1-34.7-4.8-77.9 6.5-103.2 32.8-75.2 104.2-81 125.3-81l8.9-.3 1.2.1z" style="fill:#fff"/>
      </svg>
      <!-- ===== [New Feature] END ===== -->
      <p class="text-xs font-medium">Snapchat</p>
    </div>
    </div>

          </div>
          
          <!-- Contact Content -->
          <div class="p-4">
            <div class="text-center">
              <h3 class="text-lg font-bold text-gray-900 mb-2 font-impalia">👻 Snapchat</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                team_impalia
              </p>
              <div class="mt-3">
                <span class="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                  Add Friend
                </span>
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
    <!-- ===== [FOUR CONTACT CARDS] END ===== -->

    <!-- Additional Contact Info -->
    <div class="text-center mt-12">
      <p class="text-gray-600 mb-2">
       
      </p>
      <div class="inline-flex items-center space-x-2 text-sm text-gray-500">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This component displays the Contact Us section on the homepage.
// Shows 4 contact method cards in a responsive grid layout.
// Each card uses platform brand colors and opens the respective platform.
// Mobile-first design optimized for Ghanaian users.
// ===== [HOVER EFFECTS] START ===== 
// Each card rotates 2.5 degrees to the right on hover with pink shadow glow
// ===== [HOVER EFFECTS] END ===== 

// ===== Future Enhancement Notes =====
// TODO: Add click tracking for analytics
// TODO: Implement contact form modal as alternative
// TODO: Add response time indicators based on platform
// TODO: Consider WhatsApp integration for Ghana users
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>