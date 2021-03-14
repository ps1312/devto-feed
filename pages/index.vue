<template>
  <div class="space-y-4">
    <div class="w-full border-b-4 border-gray-600">
      <span
        class="uppercase font-black text-xl tracking-widest leading-loose text-gray-700"
      >
        TRENDING
      </span>
    </div>

    <post-list :posts="posts" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '~/components/PostList.vue'

export default Vue.extend({
  components: {
    PostList,
  },
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/articles')
    this.posts = response.data
  },
})
</script>
