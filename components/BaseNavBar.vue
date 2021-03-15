<template>
  <nav
    class="fixed top-0 h-20 w-screen bg-white flex items-center shadow-md bg-indigo-500"
  >
    <nuxt-link
      to="/"
      class="ml-8 hover:bg-indigo-600 px-4 py-3 rounded-md cursor-pointer"
    >
      <span
        class="text-4xl font-bold text-white border-b-2 border-white"
        @click="scrollToTop"
      >
        dev.to feed
      </span>
    </nuxt-link>

    <nuxt-link
      to="/listings"
      class="ml-8 hover:bg-indigo-600 py-1 px-2 rounded-md cursor-pointer"
    >
      <span class="text-xl font-bold text-white" @click="scrollToTop">
        Listings
      </span>
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseNavBar',
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
})
</script>
