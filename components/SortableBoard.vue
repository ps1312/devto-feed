<template>
  <div>
    <div v-for="board in initialBoards" :key="board.id" class="w-full">
      <sortable-list
        :item-props="board.cards"
        :board="board.id"
        @started="onStart"
      >
        <div slot-scope="{ item }">
          <listing-list-item :listing="item" />
        </div>
      </sortable-list>
    </div>
  </div>
</template>

<script>
import ListingListItem from '~/components/ListingListItem.vue'
import SortableList from '~/components/SortableList.vue'

export default {
  name: 'SortableBoard',
  components: {
    SortableList,
    ListingListItem,
  },
  props: {
    initialBoards: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onStart(start) {
      console.log('started from board: ', start)
    },
  },
}
</script>

<style></style>
