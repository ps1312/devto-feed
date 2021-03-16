<template>
  <div>
    <loading-indicator
      v-if="$fetchState.pending"
      class="w-8 h-8 mx-auto fill-current text-indigo-600 animate-spin"
    />

    <dynamic-text-input
      :initial-input-fields="[{ position: 1, value: 'test' }]"
    />

    <dragn-drop
      v-if="false"
      class="md:max-w-xl mx-auto"
      :item-props="listings"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DragnDrop from '~/components/DragnDrop.vue'
import DynamicTextInput from '~/components/DynamicTextInput.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'

export default Vue.extend({
  name: 'PageListings',
  components: {
    DragnDrop,
    LoadingIndicator,
    DynamicTextInput,
  },
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
