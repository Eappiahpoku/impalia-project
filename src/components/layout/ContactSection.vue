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
          <div class="h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
            <div class="text-center text-white">
              <svg class="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.219.085.338-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624.009 11.99-5.367 11.99-11.09C24.007 5.36 18.641.009 12.017.009z"/>
              </svg>
              <p class="text-xs font-medium">Snapchat</p>
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