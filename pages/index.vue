<template>
  <div class="space-y-4">
    <div class="w-full border-b-4 border-gray-600 inline-flex justify-between">
      <base-filter-button
        :active="sortByTrending"
        :title="'TRENDING'"
        @click="sortByTrending = true"
      />

      <base-filter-button
        :active="!sortByTrending"
        :title="'NEW'"
        @click="sortByTrending = false"
      />
    </div>

    <post-list :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseFilterButton from '~/components/BaseFilterButton.vue'
import PostList from '~/components/PostList.vue'

export default Vue.extend({
  components: {
    PostList,
    BaseFilterButton,
  },
  data() {
    return {
      posts: [],
      sortByTrending: true,
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/articles')
    this.posts = response.data
  },
})
</script>
