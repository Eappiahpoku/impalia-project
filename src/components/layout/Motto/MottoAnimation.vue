<!--
  MottoAnimation.vue
  Animated motto display for The Impalia Project.
  - Types out "United by Hope, Leading by Love" with typing/erasing effects
  - Split into two parts with different colors for visual emphasis
  - Blinking cursor animation
  - Same speeds as WelcomeAnimation.vue
  - Longer pauses between cycles since it's a motto
  - Designed for footer usage
  - Mobile-first, Ghana-optimized
  - Fully commented for learning
-->

<template>
  <div class="motto-animation">
    <!-- ===== [ANIMATED MOTTO DISPLAY] START ===== -->
    <!-- Complete motto text display -->
    <span class="text-white font-impalia">
      {{ displayedText }}
    </span>
    <!-- Blinking cursor -->
    <span class="cursor text-white font-bold">|</span>
    <!-- ===== [ANIMATED MOTTO DISPLAY] END ===== -->
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This component animates the Impalia Project motto for footer display.
// It types out "United by Hope, Leading by Love" with a typing/erasing animation.
// Designed with longer pauses since it's a motto, not a welcome message.

// ===== Types & Interfaces =====
/**
 * Animation phase tracking
 * - 'typing': Typing the complete motto
 * - 'pausing': Pausing after complete motto is displayed
 * - 'erasing': Erasing the entire motto
 */
type AnimationPhase = 'typing' | 'pausing' | 'erasing'

// ===== Constants & Config =====
const fullText = 'United by Hope, Leading by Love'

// Animation speed settings (same as WelcomeAnimation but with longer pauses)
const TYPE_SPEED = 80     // ms per character (typing)
const ERASE_SPEED = 40    // ms per character (erasing)
const PAUSE_AFTER_TYPE = 2500 // ms pause after full motto typed (longer for motto)
const PAUSE_AFTER_ERASE = 800 // ms pause after erase (longer for motto)

// ===== Main Logic =====
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Reactive state for animation control
 */
const displayedText = ref('')           // Currently displayed text
const currentPhase = ref<AnimationPhase>('typing') // Current animation phase
const animationTimer = ref<number | null>(null)    // Timer reference for cleanup
const currentIndex = ref(0)             // Current character index

/**
 * ===== [ANIMATION CONTROL] START =====
 * Main animation loop that handles all phases of the motto animation
 */
function startAnimation() {
  function animate() {
    switch (currentPhase.value) {
      case 'typing':
        // Type the complete motto character by character
        if (currentIndex.value < fullText.length) {
          displayedText.value = fullText.slice(0, currentIndex.value + 1)
          currentIndex.value++
          animationTimer.value = window.setTimeout(animate, TYPE_SPEED)
        } else {
          // Complete motto typed, pause before erasing
          currentPhase.value = 'pausing'
          animationTimer.value = window.setTimeout(animate, PAUSE_AFTER_TYPE)
        }
        break
        
      case 'pausing':
        // Pause with complete motto displayed
        currentPhase.value = 'erasing'
        animationTimer.value = window.setTimeout(animate, PAUSE_AFTER_TYPE)
        break
        
      case 'erasing':
        // Erase the motto character by character from the end
        if (currentIndex.value > 0) {
          currentIndex.value--
          displayedText.value = fullText.slice(0, currentIndex.value)
          animationTimer.value = window.setTimeout(animate, ERASE_SPEED)
        } else {
          // Everything erased, pause then restart
          currentPhase.value = 'typing'
          animationTimer.value = window.setTimeout(animate, PAUSE_AFTER_ERASE)
        }
        break
    }
  }
  
  // Start the animation loop
  animate()
}

/**
 * Stop animation and clean up timers
 */
function stopAnimation() {
  if (animationTimer.value) {
    clearTimeout(animationTimer.value)
    animationTimer.value = null
  }
}
/**
 * ===== [ANIMATION CONTROL] END =====
 */

// ===== Lifecycle =====
onMounted(() => {
  // Start motto animation when component mounts
  startAnimation()
})

onUnmounted(() => {
  // Clean up timer when component unmounts
  stopAnimation()
})
</script>

<!-- ===== Styling ===== -->
<style scoped>
/* Cursor styling with blinking animation */
.cursor {
  animation: blink 1s infinite;
}

/* Blinking cursor animation */
@keyframes blink {
  0%, 50% { 
    opacity: 1; 
  }
  51%, 100% { 
    opacity: 0; 
  }
}

/* Ensure text doesn't wrap inappropriately on mobile */
.motto-animation {
  word-break: keep-all;
  white-space: nowrap;
}

/* Mobile responsiveness for smaller screens */
@media (max-width: 640px) {
  .motto-animation {
    font-size: 0.875rem; /* Smaller text on mobile for footer */
  }
}

/* Ensure proper spacing between text and cursor */
.motto-animation span {
  display: inline;
}
</style>