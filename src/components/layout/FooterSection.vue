<!--
  FooterSection.vue
  Footer section for The Impalia Project.
  - Uses pink navigation color (secondary: #F11E7D)
  - Mobile-first design optimized for Ghana
  - Functional contact links
  - Minimal, essential information only
  - Clean, accessible layout
-->

<template>
  <footer class="bg-secondary text-white py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        
        <!-- ===== [BRAND SECTION] START ===== -->
        <!-- Brand & Logo -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start space-x-3 mb-4">
            <img
              src="/impalia-logo.webp"
              alt="Impalia Project Logo"
              class="h-8 w-8 rounded-full object-cover"
              loading="lazy"
            />
            <h3 class="text-xl font-bold font-impalia">Impalia Project</h3>
          </div>
          <p class="text-white/90 text-sm leading-relaxed">
            United by Hope, Leading by Love
          </p>
        </div>
        <!-- ===== [BRAND SECTION] END ===== -->

        <!-- ===== [CONTACT LINKS] START ===== -->
        <!-- Contact Information with Working Links -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
          <div class="space-y-3">
            <!-- Email Link -->
            <a 
              href="mailto:project.impalia@gmail.com"
              class="flex items-center justify-center md:justify-start space-x-2 text-white/90 hover:text-white transition-colors touch-target-min"
              aria-label="Send email to project.impalia@gmail.com"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              <span class="text-sm">project.impalia@gmail.com</span>
            </a>

            <!-- Instagram Link -->
            <a 
              href="https://instagram.com/project.impalia"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center md:justify-start space-x-2 text-white/90 hover:text-white transition-colors touch-target-min"
              aria-label="Follow us on Instagram @project.impalia"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span class="text-sm">@project.impalia</span>
            </a>
          </div>
        </div>
        <!-- ===== [CONTACT LINKS] END ===== -->

        <!-- ===== [SCHOOL INFO] START ===== -->
        <!-- School Information -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold mb-4">Our School</h4>
          <a 
            href="https://www.soshgic.edu.gh"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors touch-target-min"
            aria-label="Visit SOS-HGIC website"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm">SOS-HGIC</span>
          </a>
        </div>
        <!-- ===== [SCHOOL INFO] END ===== -->

      </div>

      <!-- ===== [FOOTER BOTTOM] START ===== -->
      <!-- Copyright & Legal -->
      <div class="border-t border-white/20 pt-6 text-center">
        <!-- ===== [New Feature] START ===== -->
        <!-- Copyright year is now reactive -->
        <p class="text-white/80 text-sm">
          © {{ currentYear }} The Impalia Project. All rights reserved.
        </p>
        <!-- ===== [New Feature] END ===== -->
        <p class="text-white/70 text-xs mt-2">
          A student-led initiative from SOS-HGIC
        </p>
         <p class="text-white/70 text-sm mt-2">
       Built with 🤍 by <a href="www.edward.studydock.org">Edward Appiah-Poku </a> 
        </p>
      </div>
      <!-- ===== [FOOTER BOTTOM] END ===== -->

    </div>
  </footer>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This component displays the footer section for The Impalia Project.
// Features functional contact links, school information, and brand identity.
// Mobile-first design optimized for Ghanaian users with touch-friendly targets.

// ===== Main Logic =====
/**
 * Reactive current year for copyright.
 * Updates automatically every year.
 */
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())

// ===== Future Enhancement Notes =====
// TODO: Add social media links when available (TikTok, Snapchat)
// TODO: Consider adding quick navigation links
// TODO: Add newsletter signup if implemented
// TODO: Consider adding accessibility statement link
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>