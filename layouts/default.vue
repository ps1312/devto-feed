<template>
  <div>
    <div
      class="fixed top-0 h-20 w-screen bg-white flex items-center shadow-md bg-indigo-500"
    >
      <a
        class="ml-8 hover:bg-indigo-600 px-4 py-3 rounded-md cursor-pointer"
        @click.prevent="scrollToTop()"
      >
        <span class="text-4xl font-bold text-white border-b-2 border-white">
          dev.to feed
        </span>
      </a>
    </div>
    <div class="">
      <div class="pt-28 lg:max-w-4xl mx-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
})
</script>
