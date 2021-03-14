<template>
  <div>
    <base-nav-bar />

    <div class="pt-28 lg:max-w-4xl mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseNavBar from '~/components/BaseNavBar.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    BaseNavBar,
  },
})
</script>
