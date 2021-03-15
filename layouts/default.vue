<template>
  <div>
    <base-nav-bar />

    <div class="pt-28">
      <Nuxt keep-alive />
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
