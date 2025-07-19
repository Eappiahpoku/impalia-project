<!--
  EventView.vue
  Events page for The Impalia Project.
  - Mobile-first design optimized for Ghanaian users
  - Comprehensive events display with filtering and search
  - Consistent with HomeView.vue structure and styling
  - All styling via Tailwind utility classes
  - Fully commented for learning
-->

<template>
  <!-- ===== Main Container ===== -->
  <div class="min-h-screen bg-white">
    
    <!-- ===== Events Hero Section ===== -->
    <section class="bg-gradient-to-br from-secondary to-secondary/80 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-impalia">
          Our Events & Activities
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Join us in our mission to fight poverty and homelessness. Every event makes a difference in our communities.
        </p>
        <!-- ===== [ANIMATED MOTTO] START ===== -->
        <div class="text-center">
          <MottoAnimation />
        </div>
        <!-- ===== [ANIMATED MOTTO] END ===== -->
      </div>
    </section>

    <!-- ===== Event Statistics Section ===== -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Our Impact</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Every event we organize contributes to our mission. See the difference we're making together.
          </p>
        </div>

        <!-- ===== [STATISTICS CARDS] START ===== -->
        <!-- Statistics grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          
          <!-- Events Held -->
          <div class="bg-blue-50 rounded-impalia p-6 text-center border border-blue-200 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 3 3.01 3.9 3.01 5L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-secondary mb-2">15+</div>
            <div class="text-sm text-gray-600">Events Organized</div>
          </div>

          <!-- People Helped -->
          <div class="bg-green-50 rounded-impalia p-6 text-center border border-green-200 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.13 7H16c-.8 0-1.54.37-2 1l-3 4v6h2v7h3v-7h2v7h3z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-secondary mb-2">500+</div>
            <div class="text-sm text-gray-600">People Impacted</div>
          </div>

          <!-- Funds Raised -->
          <div class="bg-purple-50 rounded-impalia p-6 text-center border border-purple-200 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-secondary mb-2">GHS 25k+</div>
            <div class="text-sm text-gray-600">Funds Raised</div>
          </div>

          <!-- Volunteers -->
          <div class="bg-orange-50 rounded-impalia p-6 text-center border border-orange-200 hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-secondary mb-2">100+</div>
            <div class="text-sm text-gray-600">Active Volunteers</div>
          </div>

        </div>
        <!-- ===== [STATISTICS CARDS] END ===== -->
      </div>
    </section>

    <!-- ===== Event Categories Section ===== -->
    <section class="bg-gray-50 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">Types of Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We organize various types of events to address different community needs and create maximum impact.
          </p>
        </div>

        <!-- ===== [EVENT CATEGORIES] START ===== -->
        <!-- Categories grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Fundraising Events -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div class="text-center text-blue-600">
                <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                <p class="text-lg font-medium">Fundraising</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Fundraising Events</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Car washes, bake sales, and community drives to raise funds for our charitable activities and support those in need.
              </p>
              <div class="flex items-center text-sm text-secondary">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>8+ Events Completed</span>
              </div>
            </div>
          </div>

          <!-- Community Outreach -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <div class="text-center text-green-600">
                <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.13 7H16c-.8 0-1.54.37-2 1l-3 4v6h2v7h3v-7h2v7h3z"/>
                </svg>
                <p class="text-lg font-medium">Community</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Community Outreach</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Direct community engagement activities including food distribution, shelter support, and awareness campaigns.
              </p>
              <div class="flex items-center text-sm text-secondary">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>5+ Outreach Programs</span>
              </div>
            </div>
          </div>

          <!-- Educational Workshops -->
          <div class="bg-white rounded-impalia shadow-md border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-secondary/30 hover:rotate-2 transition-all duration-300 ease-in-out transform">
            <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <div class="text-center text-purple-600">
                <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
                <p class="text-lg font-medium">Education</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 font-impalia">Educational Workshops</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Skills development sessions, awareness programs, and educational initiatives to empower communities.
              </p>
              <div class="flex items-center text-sm text-secondary">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>3+ Workshops Held</span>
              </div>
            </div>
          </div>

        </div>
        <!-- ===== [EVENT CATEGORIES] END ===== -->
      </div>
    </section>

    <!-- ===== All Events Section ===== -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-impalia">All Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Browse through all our past, current, and upcoming events. See how you can get involved and make a difference.
          </p>
        </div>

        <!-- ===== [COMPREHENSIVE EVENT SECTION] START ===== -->
        <!-- Include the existing EventSection component -->
        <EventSection />
        <!-- ===== [COMPREHENSIVE EVENT SECTION] END ===== -->
      </div>
    </section>

    <!-- ===== Upcoming Events Section ===== -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 font-impalia">Upcoming Events</h2>
          <p class="text-white/80 max-w-2xl mx-auto">
            Mark your calendar! Here are our upcoming events where you can join us in making a difference.
          </p>
        </div>

        <!-- ===== [UPCOMING EVENTS TIMELINE] START ===== -->
        <!-- Upcoming events timeline -->
        <div class="space-y-8">
          
          <!-- Event 1 -->
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 bg-white/10 rounded-impalia p-6 hover:bg-white/20 transition-colors">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-secondary rounded-full flex flex-col items-center justify-center">
                <div class="text-xs font-medium">Dec</div>
                <div class="text-lg font-bold">20</div>
              </div>
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2 font-impalia">Christmas Charity Drive</h3>
              <p class="text-white/80 mb-3">
                Join us for our annual Christmas charity drive to provide food and gifts for families in need across Accra.
              </p>
              <div class="flex flex-wrap gap-4 text-sm text-white/70">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  December 20, 2024
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Accra, Ghana
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Fundraising
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <button class="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-impalia font-medium transition-colors touch-target-min">
                Learn More
              </button>
            </div>
          </div>

          <!-- Event 2 -->
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 bg-white/10 rounded-impalia p-6 hover:bg-white/20 transition-colors">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-secondary rounded-full flex flex-col items-center justify-center">
                <div class="text-xs font-medium">Jan</div>
                <div class="text-lg font-bold">15</div>
              </div>
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2 font-impalia">Skills Development Workshop</h3>
              <p class="text-white/80 mb-3">
                Free workshop on basic digital skills and entrepreneurship for young people in local communities.
              </p>
              <div class="flex flex-wrap gap-4 text-sm text-white/70">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  January 15, 2025
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  SOS-HGIC Campus
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Education
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <button class="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-impalia font-medium transition-colors touch-target-min">
                Register
              </button>
            </div>
          </div>

          <!-- Event 3 -->
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 bg-white/10 rounded-impalia p-6 hover:bg-white/20 transition-colors">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-secondary rounded-full flex flex-col items-center justify-center">
                <div class="text-xs font-medium">Feb</div>
                <div class="text-lg font-bold">14</div>
              </div>
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2 font-impalia">Love & Care Community Outreach</h3>
              <p class="text-white/80 mb-3">
                Valentine's Day special outreach to homeless shelters with food, clothing, and essential supplies.
              </p>
              <div class="flex flex-wrap gap-4 text-sm text-white/70">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  February 14, 2025
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  Multiple Locations
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Community
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <button class="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-impalia font-medium transition-colors touch-target-min">
                Volunteer
              </button>
            </div>
          </div>

        </div>
        <!-- ===== [UPCOMING EVENTS TIMELINE] END ===== -->

        <!-- Call to Action -->
        <div class="text-center mt-12">
          <h3 class="text-2xl font-bold mb-4 font-impalia">Want to Get Involved?</h3>
          <p class="text-white/80 mb-6 max-w-2xl mx-auto">
            Join us in our upcoming events and be part of the change. Every helping hand makes a difference in our community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-impalia font-medium transition-colors touch-target-min">
              Volunteer Today
            </button>
            <button class="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-impalia font-medium transition-colors touch-target-min">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Contact Section ===== -->
    <ContactSection />

    <!-- ===== Footer Section ===== -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Purpose =====
// This is the Events page for The Impalia Project.
// It provides comprehensive event information, statistics, and opportunities for engagement.
// Mobile-first design optimized for Ghanaian users with touch-friendly interactions.

// ===== Component Imports =====
import ContactSection from '@/components/layout/ContactSection.vue'
import EventSection from '@/components/layout/EventSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import MottoAnimation from '@/components/layout/Motto/MottoAnimation.vue'

// ===== Future Enhancement Notes =====
// TODO: Add event filtering by category and date
// TODO: Implement event registration system
// TODO: Add event search functionality
// TODO: Include event calendar integration
// TODO: Add event photo galleries
// TODO: Implement volunteer signup system
</script>

<!-- ===== Tailwind Custom Classes ===== -->
<style>
/* Touch target minimum size for mobile accessibility */
.touch-target-min {
  min-width: 48px;
  min-height: 48px;
}
</style>