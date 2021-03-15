<template>
  <ul class="flex flex-col space-y-4">
    <li
      v-for="(item, index) in items"
      id="item"
      :key="item.id"
      draggable="true"
      class="inline-flex items-center bg-gray-100 p-2 m-2 rounded-md"
      @dragstart="onDragStart($event, index)"
      @dragover="onDragOver($event)"
      @drag="onDrag"
      @drop="onDrop($event, index)"
    >
      <base-icon class="h-4 w-4 text-gray-500" />

      <div class="flex-1 flex flex-col p-3">
        <span class="text-gray-900 font-bold text-lg">
          {{ item.title }}
        </span>

        <div class="inline-flex items-center space-x-2 pt-8">
          <img
            class="h-8 w-8 rounded-full border-2 border-black"
            :src="item.user.profile_image_90"
          />

          <div class="flex flex-col leading-4">
            <span class="text-gray-800 font-bold text-sm">{{
              item.user.name
            }}</span>
            <span class="text-gray-500 text-sm">{{ item.user.username }}</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'DragnDrop',
  components: { BaseIcon },
  props: {
    itemProps: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      items: [...this.itemProps],
    }
  },
  methods: {
    onDragStart(ev, from) {
      ev.dataTransfer.setData('text/plain', from)
    },
    onDrag(ev) {
      if (ev.clientY <= 100) {
        window.scrollTo(0, window.scrollY - 10)
      } else if (ev.clientY >= window.innerHeight - 50) {
        window.scrollTo(0, window.scrollY + 10)
      }
    },
    onDrop(ev, toIndex) {
      ev.preventDefault()
      const newItems = [...this.items]
      const fromIndex = ev.dataTransfer.getData('text/plain')

      this.items = this.swapIndexes(newItems, fromIndex, toIndex)
    },
    onDragOver(ev) {
      ev.preventDefault()
    },
    swapIndexes(arr, fromIndex, toIndex) {
      const temp = arr[fromIndex]
      arr[fromIndex] = arr[toIndex]
      arr[toIndex] = temp
      return arr
    },
  },
}
</script>

<style></style>
