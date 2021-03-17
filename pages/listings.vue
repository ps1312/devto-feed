<template>
  <div class="mx-auto w-1/2">
    <loading-indicator
      v-if="$fetchState.pending"
      class="w-8 h-8 mx-auto fill-current text-indigo-600 animate-spin"
    />
    <sortable-list v-else :item-props="listings">
      <div slot-scope="{ item }">
        <listing-list-item :listing="item" />
      </div>
    </sortable-list>
  </div>
</template>

<script>
import ListingListItem from '~/components/ListingListItem.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import SortableList from '~/components/SortableList.vue'

export default {
  name: 'PageListings',
  components: {
    SortableList,
    ListingListItem,
    LoadingIndicator,
  },
  data() {
    return {
      listings: [],
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://dev.to/api/listings')

    this.listings = response.data
  },
}
</script>
