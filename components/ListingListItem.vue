<template>
  <div
    class="bg-gray-100 rounded-md flex items-center justify-between px-4 py-6"
  >
    <span class="text-gray-900 font-bold text-lg">
      {{ listing.title }}
    </span>

    <base-icon class="h-4 w-4 text-gray-500" />
  </div>
</template>

<script>
export default {
  name: 'ListingListItem',
  props: {
    listing: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
