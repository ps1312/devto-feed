<template>
  <ul class="flex justify-between">
    <li v-for="tag in tags" :key="tag.name">
      <button
        :class="[
          'mr-2 mt-2 px-2 py-1 font-medium text-base rounded-md',
          selectedTags.includes(tag.name)
            ? 'bg-indigo-500 text-gray-100'
            : 'bg-white text-gray-800',
        ]"
        @click="selectTag(tag.name)"
      >
        {{ tag.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TagsList',
  data() {
    return {
      tags: [],
      selectedTags: '',
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/tags')

    this.tags = response.data
  },
  methods: {
    selectTag(name) {
      this.selectedTags = name
      this.$emit('ontagsupdated', name)
    },
  },
}
</script>

<style></style>
