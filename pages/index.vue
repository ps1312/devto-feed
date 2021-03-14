<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div class="mx-4 my-6 rounded-2xl shadow-md border border-gray-300">
        <img class="rounded-tl-xl rounded-tr-xl" :src="post.cover_image" />

        <div class="p-4 flex flex-col space-y-2">
          <span class="font-semibold text-indigo-600">
            {{ post.user.username }}
          </span>
          <span class="font-bold text-xl text-gray-800">{{ post.title }}</span>

          <ul class="inline-flex flex-wrap">
            <li
              v-for="tag in post.tag_list"
              :key="tag"
              class="mr-2 mt-2 px-2 font-medium text-gray-100 bg-indigo-600 rounded-2xl"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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

// "id": 194541,
// "title": "There's a new DEV theme in town for all you 10x hackers out there (plus one actually useful new feature)",
// "tag_list": [ "meta", "changelog", "css", "ux" ]
// "comments_count": 37
// "positive_reactions_count": 12
// "public_reactions_count": 142
// "created_at": "2019-10-24T13:41:29Z",
// "user": {
// "name": "Ben Halpern",
// "username": "ben",
// "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--DcW51A6v--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png"
// },
</script>
