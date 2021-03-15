<template>
  <div class="space-y-4 px-4 lg:max-w-6xl mx-auto">
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

    <tags-list @ontagsupdated="onTagsUpdated" />

    <loading-indicator
      v-if="$fetchState.pending"
      class="w-8 h-8 mx-auto fill-current text-indigo-600 animate-spin"
    />

    <post-list :posts="posts" />
  </div>
</template>

<script>
import BaseFilterButton from '~/components/BaseFilterButton.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import PostList from '~/components/PostList.vue'
import TagsList from '~/components/TagsList.vue'

export default {
  components: {
    PostList,
    BaseFilterButton,
    TagsList,
    LoadingIndicator,
  },
  data() {
    return {
      posts: [],
      selectedTag: '',
      sortByTrending: true,
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/articles', {
      params: {
        state: this.sortByTrending ? 'rising' : 'fresh',
        tag: this.selectedTag || null,
      },
    })
    this.posts = response.data
  },
  watch: {
    sortByTrending() {
      this.$fetch()
    },
  },
  methods: {
    onTagsUpdated(selectedTag) {
      this.selectedTag = selectedTag
      this.$fetch()
    },
  },
}
</script>
