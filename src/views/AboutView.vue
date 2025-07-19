<!--
  AboutView.vue
  About page for The Impalia Project.
  - Mobile-first design optimized for Ghanaian users
  - Comprehensive information about the project, team, and mission
  - Consistent with HomeView.vue structure and styling
  - All styling via Tailwind utility classes
  - Fully commented for learning
-->

<template>
  <!-- ===== Main Container ===== -->
  <div class="min-h-screen bg-white">
    
    <!-- ===== About Hero Section ===== -->
    <section class="bg-gradient-to-br from-secondary to-secondary/80 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-impalia">
          About The Impalia Project
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          United by Hope, Leading by Love - Discover the story behind our student-led initiative to fight poverty and homelessness in Ghana.
          
        </p>
        <div class="p-4">

        </div>
         <div class="text-center">
          <MottoAnimation />
        </div>
      </div>
    </section>

    <!-- ===== Mission Statement Section ===== -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Our Mission</h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              The Impalia Project is a student-led initiative from <a href="https://www.soshgic.edu.gh" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-secondary/80 font-medium">SOS-HGIC</a> dedicated to creating meaningful change in our communities.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Mission Card 1 -->
              <div class="bg-blue-50 rounded-impalia p-6 text-center">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Fight Poverty</h3>
                <p class="text-gray-600 text-sm">
                  Working to address root causes of poverty through education, resources, and community support.
                </p>
              </div>

              <!-- Mission Card 2 -->
              <div class="bg-green-50 rounded-impalia p-6 text-center">
                <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">End Homelessness</h3>
                <p class="text-gray-600 text-sm">
                  Providing shelter, support, and pathways to stable housing for those in need.
                </p>
              </div>

              <!-- Mission Card 3 -->
              <div class="bg-purple-50 rounded-impalia p-6 text-center">
                <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.13 7H16c-.8 0-1.54.37-2 1l-3 4v6h2v7h3v-7h2v7h3z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Build Community</h3>
                <p class="text-gray-600 text-sm">
                  Creating stronger, more connected communities through volunteer work and advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Our Story Section ===== -->
    <section class="bg-gray-50 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Story Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Our Story</h2>
            <div class="space-y-6">
              <p class="text-lg text-gray-600 leading-relaxed">
                The Impalia Project was born from the collective passion of 20 dedicated students at SOS-Hermann Gmeiner International College. We recognized that change doesn't wait for graduation – it starts with students who care about their communities.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                What started as classroom discussions about social issues quickly evolved into concrete action. We organized our first car wash and bake sale, and the overwhelming community support showed us that small actions could create big impacts.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                Today, we continue to grow our initiatives, always guided by our motto: "United by Hope, Leading by Love."
              </p>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-secondary">20</div>
                <div class="text-sm text-gray-600">Team Members</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-secondary">3+</div>
                <div class="text-sm text-gray-600">Events Held</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-secondary">100+</div>
                <div class="text-sm text-gray-600">People Helped</div>
              </div>
              <div class="text-center">
                <div class="text-2xl md:text-3xl font-bold text-secondary">1</div>
                <div class="text-sm text-gray-600">Shared Vision</div>
              </div>
            </div>
          </div>

          <!-- Story Image Placeholder -->
          <div class="lg:pl-8">
            <div class="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-impalia flex items-center justify-center border-2 border-secondary/20">
              <div class="text-center text-secondary">
                <svg class="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-lg font-medium">Our Journey</p>
                <p class="text-sm opacity-70">From Vision to Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Team Member Carousel Section ===== -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Meet Our Team</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of 20 passionate students brings together different skills, perspectives, and dreams united by a common goal.
          </p>
        </div>
        
        <!-- ===== [TEAM CAROUSEL] START ===== -->
        <!-- Import and use the existing MemberCarousel component -->
        <MemberCarousel />
        <!-- ===== [TEAM CAROUSEL] END ===== -->
      </div>
    </section>

    <!-- ===== Values Section ===== -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 font-impalia">Our Values</h2>
          <p class="text-white/80 max-w-2xl mx-auto">
            These core values guide everything we do and shape how we approach our mission.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Value 1: Hope -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">Hope</h3>
            <p class="text-white/80 text-sm">
              We believe in a brighter future and work tirelessly to make it a reality.
            </p>
          </div>

          <!-- Value 2: Love -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">Love</h3>
            <p class="text-white/80 text-sm">
              Compassion and empathy drive our actions and guide our relationships.
            </p>
          </div>

          <!-- Value 3: Unity -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.13 7H16c-.8 0-1.54.37-2 1l-3 4v6h2v7h3v-7h2v7h3zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1H5c-.8 0-1.54.37-2 1l-3 4v6h2v7h3v-7h2v7h3v-6l-3-4c-.46-.63-1.2-1-2-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">Unity</h3>
            <p class="text-white/80 text-sm">
              Together we are stronger and can achieve more than we ever could alone.
            </p>
          </div>

          <!-- Value 4: Action -->
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-impalia">Action</h3>
            <p class="text-white/80 text-sm">
              We turn ideas into reality through concrete steps and persistent effort.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Get Involved Section ===== -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Get Involved</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you're a student, community member, or organization, there are many ways to join our mission and make a difference.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Volunteer -->
          <div class="bg-blue-50 rounded-impalia p-8 text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.13 7H16c-.8 0-1.54.37-2 1l-3 4v6h2v7h3v-7h2v7h3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Volunteer</h3>
            <p class="text-gray-600 mb-4">
              Join our events and activities. Every helping hand makes a difference.
            </p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-impalia font-medium transition-colors touch-target-min">
              Join Us
            </button>
          </div>

          <!-- Donate -->
          <div class="bg-green-50 rounded-impalia p-8 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Donate</h3>
            <p class="text-gray-600 mb-4">
              Support our projects with financial contributions, big or small.
            </p>
            <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-impalia font-medium transition-colors touch-target-min">
              Donate Now
            </button>
          </div>

          <!-- Spread the Word -->
          <div class="bg-purple-50 rounded-impalia p-8 text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Share</h3>
            <p class="text-gray-600 mb-4">
              Help us reach more people by sharing our mission on social media.
            </p>
            <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-impalia font-medium transition-colors touch-target-min">
              Share Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Contact Section ===== -->
    <ContactSection />
<div class="p-2"></div>
    <!-- ===== Footer Section ===== -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This is the About page for The Impalia Project.
// It provides comprehensive information about the project, team, mission, and values.
// Mobile-first design optimized for Ghanaian users with touch-friendly interactions.

// ===== Component Imports =====
import ContactSection from '@/components/layout/ContactSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import MemberCarousel from '@/components/layout/MemberCarousel.vue'
import MottoAnimation from '@/components/layout/Motto/MottoAnimation.vue';

// ===== Future Enhancement Notes =====
// TODO: Add dynamic team member data from API
// TODO: Implement volunteer signup form
// TODO: Add donation integration with mobile money support
// TODO: Include social sharing functionality
// TODO: Add testimonials section
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>