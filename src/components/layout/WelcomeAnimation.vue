<!--
  WelcomeAnimation.vue
  Animated welcome message for The Impalia Project.
  - Mobile-first, Ghana-optimized.
  - "Impalia Project" always in secondary color.
  - Typing/erasing loop for intro effect.
  - All styling via Tailwind utility classes.
  - Fully commented for learning.
-->

<template>
  <div class="flex flex-col items-center justify-center min-h-[20vh]">
    <!-- Animated text display area -->
    <h1
      class="text-4xl sm:text-3xl md:text-5xl font-bold text-center leading-tight"
      aria-label="Welcome to the Impalia Project"
    >
      <!--
        Display the animated text.
        "Impalia Project" part is always styled with text-secondary.
      -->
      <span>
        <!-- Show animated prefix -->
        {{ animatedPrefix }}
        <!-- "Impalia Project" always styled in secondary color -->
        <span class="text-secondary">
          {{ animatedSuffix }}
        </span>
        <!-- Blinking cursor for typing effect -->
        <span class="inline-block w-2 h-6 align-bottom bg-secondary animate-blink"></span>
      </span>
    </h1>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This component animates the welcome message for The Impalia Project.
// It types out "Welcome to the Impalia Project", erases it, and repeats forever.
// "Impalia Project" is always styled in secondary color for branding.

// ===== Types & Interfaces =====
/**
 * Animation state for typing/erasing effect.
 */
type AnimationPhase = 'typing' | 'erasing'

// ===== Constants & Config =====
const fullPrefix = 'Welcome to the '
const fullSuffix = 'Impalia Project!' // Always styled in secondary color

// Animation speed settings (tuned for Ghanaian mobile users)
const TYPE_SPEED = 80    // ms per character (typing)
const ERASE_SPEED = 40   // ms per character (erasing)
const PAUSE_AFTER_TYPE = 900 // ms pause after full text typed
const PAUSE_AFTER_ERASE = 400 // ms pause after erase

// ===== Main Logic =====
import { ref, onMounted } from 'vue'

/**
 * Reactive state for animated text.
 */
const animatedPrefix = ref('') // "Welcome to the "
const animatedSuffix = ref('') // "Impalia Project"
const phase = ref<AnimationPhase>('typing') // Current animation phase

/**
 * Main animation loop.
 * Types out the prefix, then the suffix, then erases both, and repeats.
 */
function runAnimationLoop() {
  let prefixIndex = 0
  let suffixIndex = 0

  async function typeText() {
    // 1. Type out the prefix
    while (prefixIndex < fullPrefix.length) {
      animatedPrefix.value = fullPrefix.slice(0, prefixIndex + 1)
      prefixIndex++
      await delay(TYPE_SPEED)
    }
    // 2. Type out the suffix ("Impalia Project")
    while (suffixIndex < fullSuffix.length) {
      animatedSuffix.value = fullSuffix.slice(0, suffixIndex + 1)
      suffixIndex++
      await delay(TYPE_SPEED)
    }
    // 3. Pause after typing
    await delay(PAUSE_AFTER_TYPE)
    phase.value = 'erasing'
    eraseText()
  }

  async function eraseText() {
    // 4. Erase the suffix first
    while (suffixIndex > 0) {
      suffixIndex--
      animatedSuffix.value = fullSuffix.slice(0, suffixIndex)
      await delay(ERASE_SPEED)
    }
    // 5. Erase the prefix
    while (prefixIndex > 0) {
      prefixIndex--
      animatedPrefix.value = fullPrefix.slice(0, prefixIndex)
      await delay(ERASE_SPEED)
    }
    // 6. Pause after erase
    await delay(PAUSE_AFTER_ERASE)
    phase.value = 'typing'
    typeText()
  }

  // Start the animation loop
  typeText()
}

/**
 * Utility: Delay for given ms.
 * @param ms Number of milliseconds to wait
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ===== Lifecycle =====
onMounted(() => {
  // Start animation when component mounts
  runAnimationLoop()
})
</script>

<!-- ===== Tailwind Custom Animation ===== -->
<style>
/* Blinking cursor animation for typing effect */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s steps(1) infinite;
}
</style>