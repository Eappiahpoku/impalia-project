<!--
  MemberCarousel.vue
  Team member image carousel for The Impalia Project.
  - Auto-plays every 7 seconds from earliest to latest image by date.
  - Manual navigation with previous/next buttons.
  - Pauses on hover for better UX.
  - Mobile-first, Ghana-optimized.
  - All styling via Tailwind utility classes.
  - Fully commented for learning.
-->

<template>
  <div class="relative w-full max-w-4xl mx-auto bg-white rounded-impalia shadow-lg">
    <!-- Main carousel container -->
    <div
      class="relative"
      @mouseenter="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <!-- Image display area -->
      <div class="relative flex justify-center items-center min-h-[600px]">
        <img
          v-for="(image, index) in images"
          :key="image.name"
          :src="image.url"
          :alt="`Team member ${image.name}`"
          class="absolute max-w-full max-h-[600px] transition-opacity duration-500 object-contain"
          :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
          loading="lazy"
        />
      </div>

      <!-- Previous button -->
      <button
        @click="previousImage"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 
               bg-black bg-opacity-50 hover:bg-opacity-75 text-white 
               w-12 h-12 rounded-full flex items-center justify-center
               transition-all duration-200 touch-target-min"
        aria-label="Previous image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Next button -->
      <button
        @click="nextImage"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 
               bg-black bg-opacity-50 hover:bg-opacity-75 text-white 
               w-12 h-12 rounded-full flex items-center justify-center
               transition-all duration-200 touch-target-min"
        aria-label="Next image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Image counter -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                  bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>

    <!-- Progress indicator dots -->
    <div class="flex justify-center space-x-2 py-4">
      <button
        v-for="index in images.length"
        :key="`dot-${index-1}`"
        @click="goToImage(index-1)"
        class="w-3 h-3 rounded-full transition-all duration-200"
        :class="(index-1) === currentIndex ? 'bg-secondary' : 'bg-gray-300 hover:bg-gray-400'"
        :aria-label="`Go to image ${index}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This component displays team member images in a carousel format.
// Images auto-advance every 7 seconds, can be paused on hover,
// and include manual navigation controls.

// ===== Types & Interfaces =====
/**
 * Image data structure for carousel items.
 */
interface CarouselImage {
  name: string // Simple letter identifier (a, b, c, etc.)
  url: string  // Full path to image
  order: number // Sort order (a=1, b=2, c=3, etc.)
}

// ===== Constants & Config =====
const AUTOPLAY_INTERVAL = 3000 // 7 seconds between slides
const BASE_PATH = '/carousell/' // Path to carousel images

// ===== Main Logic =====
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Reactive state for carousel functionality.
 */
const currentIndex = ref(0) // Currently displayed image index
const isPlaying = ref(true)  // Whether autoplay is active
const intervalId = ref<number | null>(null) // Timer reference

/**
 * <!-- ===== [SIMPLIFIED NAMING] START ===== -->
 * All carousel images using simple a-z naming convention.
 * Images are ordered alphabetically: a.JPG, b.JPG, c.JPG, etc.
 * <!-- ===== [SIMPLIFIED NAMING] END ===== -->
 */
const images = ref<CarouselImage[]>([
  { name: 'a', url: `${BASE_PATH}a.JPG`, order: 1 },
  { name: 'b', url: `${BASE_PATH}b.JPG`, order: 2 },
  { name: 'c', url: `${BASE_PATH}c.JPG`, order: 3 },
  { name: 'd', url: `${BASE_PATH}d.JPG`, order: 4 },
  { name: 'e', url: `${BASE_PATH}e.JPG`, order: 5 },
  { name: 'f', url: `${BASE_PATH}f.JPG`, order: 6 },
  { name: 'g', url: `${BASE_PATH}g.JPG`, order: 7 },
  { name: 'h', url: `${BASE_PATH}h.JPG`, order: 8 },
  { name: 'i', url: `${BASE_PATH}i.JPG`, order: 9 },
  { name: 'j', url: `${BASE_PATH}j.JPG`, order: 10 },
  { name: 'k', url: `${BASE_PATH}k.JPG`, order: 11 },
  { name: 'l', url: `${BASE_PATH}l.JPG`, order: 12 },
  { name: 'm', url: `${BASE_PATH}m.JPG`, order: 13 },
  { name: 'n', url: `${BASE_PATH}n.JPG`, order: 14 },
  { name: 'o', url: `${BASE_PATH}o.JPG`, order: 15 },
  { name: 'p', url: `${BASE_PATH}p.JPG`, order: 16 },
  { name: 'q', url: `${BASE_PATH}q.JPG`, order: 17 },
  { name: 'r', url: `${BASE_PATH}r.JPG`, order: 18 },
  { name: 's', url: `${BASE_PATH}s.JPG`, order: 19 },
  { name: 't', url: `${BASE_PATH}t.JPG`, order: 20 },
  { name: 'u', url: `${BASE_PATH}u.JPG`, order: 21 },
  { name: 'v', url: `${BASE_PATH}v.JPG`, order: 22 },
  { name: 'w', url: `${BASE_PATH}w.JPG`, order: 23 },
  { name: 'x', url: `${BASE_PATH}x.JPG`, order: 24 },
  { name: 'y', url: `${BASE_PATH}y.JPG`, order: 25 }
])

/**
 * Navigation Functions
 */
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

function previousImage() {
  currentIndex.value = currentIndex.value === 0 
    ? images.value.length - 1 
    : currentIndex.value - 1
}

function goToImage(index: number) {
  currentIndex.value = index
}

/**
 * Autoplay Control Functions
 */
function startAutoplay() {
  if (intervalId.value) clearInterval(intervalId.value)
  
  intervalId.value = window.setInterval(() => {
    if (isPlaying.value) {
      nextImage()
    }
  }, AUTOPLAY_INTERVAL)
}

function pauseCarousel() {
  isPlaying.value = false
}

function resumeCarousel() {
  isPlaying.value = true
}

function stopAutoplay() {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

// ===== Lifecycle =====
onMounted(() => {
  // Start autoplay when component mounts
  startAutoplay()
})

onUnmounted(() => {
  // Clean up interval when component unmounts
  stopAutoplay()
})
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>