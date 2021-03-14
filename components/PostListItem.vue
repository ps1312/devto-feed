<template>
  <nuxt-link :to="'/' + post.id">
    <div
      class="mx-4 my-3 rounded-2xl shadow-md border-4 border-white bg-white hover:shadow-xl hover:border-indigo-700"
    >
      <img class="rounded-tl-xl rounded-tr-xl" :src="post.cover_image" />

      <div class="p-4 flex flex-col space-y-2">
        <span class="font-semibold text-indigo-600">
          {{ post.user.username }}
        </span>
        <span class="font-bold text-xl text-gray-800">{{ post.title }}</span>

        <ul class="inline-flex flex-wrap">
          <li v-for="tag in post.tag_list" :key="tag">
            <button
              class="mr-4 mt-2 px-3 font-medium text-sm text-gray-100 bg-indigo-600 rounded-2xl"
              @click.prevent
            >
              {{ tag }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PostListItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
</script>
