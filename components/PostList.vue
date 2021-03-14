<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="post in posts" :key="post.id">
      <post-list-item :post="post" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import PostListItem from './PostListItem.vue'

export default Vue.extend({
  name: 'PostList',
  components: {
    PostListItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
})
</script>
