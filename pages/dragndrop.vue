<template>
  <dragn-drop class="md:max-w-xl mx-auto" :item-props="listings" />
</template>

<script lang="ts">
import Vue from 'vue'
import DragnDrop from '~/components/DragnDrop.vue'

export default Vue.extend({
  components: { DragnDrop },
  data() {
    return {
      listings: [],
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/listings')

    this.listings = response.data
  },
})
</script>

<style></style>
