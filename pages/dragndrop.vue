<template>
  <dragn-drop :item-props="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]" />
</template>

<script lang="ts">
import Vue from 'vue'
import DragnDrop from '~/components/DragnDrop.vue'

export default Vue.extend({
  components: { DragnDrop },
})
</script>

<style></style>
