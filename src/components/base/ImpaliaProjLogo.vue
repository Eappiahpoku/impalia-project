<!--
  ImpaliaProjLogo.vue
  The Impalia Project brand logo component optimized for mobile-first design.
  - Responsive SVG logo with clean, modern design
  - Supports white/dark color variations
  - Optimized for Ghana's mobile-first audience
-->

<template>
  <div class="impalia-logo">
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-10"
      :class="{ 'text-primary': !white, 'text-white': white }"
    >
      <!-- Main Circle representing Ghana's unity -->
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" stroke-width="2"/>
      
      <!-- 'I' shape representing The Impalia Project logo -->
      <path
        d="M20 14L28 14M24 14L24 34M20 34L28 34"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
      />
      
      <!-- Impala Lily flower representing Ghana's resilience -->
      <path
        d="M24 32L25.5 35.5L29.5 36L26.75 38.75L27.5 43L24 41L20.5 43L21.25 38.75L18.5 36L22.5 35.5L24 32Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
// ===== Props & Types =====
/**
 * The Impalia Project Logo component props
 * @param white - Use white color variant (for dark backgrounds)
 */
defineProps<{
  white?: boolean
}>()
</script>

<style scoped>
/* ===== Impalia Project Logo Styles ===== */
.impalia-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
