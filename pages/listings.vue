<template>
  <div class="mx-auto w-1/2">
    <sortable-list :item-props="listings">
      <div slot-scope="{ item }">
        <listing-list-item :listing="item" />
      </div>
    </sortable-list>
  </div>
</template>

<script>
import ListingListItem from '~/components/ListingListItem.vue'
import SortableList from '~/components/SortableList.vue'

export default {
  name: 'PageListings',
  components: {
    SortableList,
    ListingListItem,
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
