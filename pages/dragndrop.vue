<template>
  <dragn-drop :item-props="[1, 2, 3, 4, 5]" />
</template>

<script lang="ts">
import Vue from 'vue'
import DragnDrop from '~/components/DragnDrop.vue'

export default Vue.extend({
  components: { DragnDrop },
})
</script>

<style></style>
