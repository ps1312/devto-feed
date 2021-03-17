<template>
  <ul class="flex flex-col space-y-4 cursor-move">
    <li
      v-for="(item, index) in previewItems"
      id="item"
      :key="item.id"
      draggable="true"
      :class="[
        'inline-flex items-center bg-gray-100 p-2 m-2 rounded-md h-20',
        current === index && 'opacity-0',
      ]"
      @dragstart="onDragStart(index)"
      @dragover="onDragOver"
      @drag="onDrag"
      @drop="onDrop"
      @dragenter="onDragEnter($event, index)"
      @dragend="resetDrag"
    >
      <div class="flex-1 flex flex-col p-3">
        <span class="text-gray-900 font-bold text-lg">
          {{ item.title }}
        </span>
      </div>

      <base-icon class="h-4 w-4 text-gray-500" />
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
      start: null,
      current: null,
    }
  },
  computed: {
    previewItems() {
      if (this.current !== null) {
        return this.reorderList([...this.items], this.start, this.current)
      }

      return this.items
    },
  },
  methods: {
    onDragStart(start) {
      this.start = start
    },
    onDrag(ev) {
      if (ev.clientY <= 100) {
        window.scrollTo(0, window.scrollY - 10)
      } else if (ev.clientY >= window.innerHeight - 50) {
        window.scrollTo(0, window.scrollY + 10)
      }
    },
    onDrop(ev) {
      ev.preventDefault()
      this.items = this.reorderList([...this.items], this.start, this.current)
      this.resetDrag()
    },
    onDragOver(ev) {
      ev.preventDefault()
    },
    onDragEnter(ev, current) {
      ev.preventDefault()
      this.current = current
    },
    resetDrag() {
      this.start = null
      this.current = null
    },
    reorderList(arr, fromIndex, currentIndex) {
      const itemRemovedArray = [
        ...arr.slice(0, fromIndex),
        ...arr.slice(fromIndex + 1, arr.length),
      ]
      return [
        ...itemRemovedArray.slice(0, currentIndex),
        arr[fromIndex],
        ...itemRemovedArray.slice(currentIndex, itemRemovedArray.length),
      ]
    },
  },
}
</script>

<style></style>
