<template>
  <ul class="flex justify-between overflow-x-auto py-4">
    <li v-for="tag in tags" :key="tag.name">
      <button
        :class="[
          'mr-2 px-2 font-medium text-base rounded-md focus:outline-none ',
          selectedTag.includes(tag.name)
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
      selectedTag: '',
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/tags')

    this.tags = response.data
  },
  methods: {
    selectTag(name) {
      let newTag
      if (this.selectedTag === name) {
        newTag = ''
      } else {
        newTag = name
      }

      this.selectedTag = newTag
      this.$emit('ontagsupdated', newTag)
    },
  },
}
</script>

<style></style>
