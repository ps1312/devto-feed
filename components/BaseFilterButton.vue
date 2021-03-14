<template>
  <button
    :class="[active ? 'mb-2 px-2 bg-indigo-500 rounded' : 'mb-2 px-2 rounded']"
    @click="$emit('click')"
  >
    <span
      :class="[
        active
          ? 'uppercase font-bold text-lg tracking-wider leading-loose text-white'
          : 'uppercase font-bold text-lg tracking-wider leading-loose text-gray-300',
      ]"
    >
      {{ title }}
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseFilterButton',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style></style>
