<template>
  <ul class="space-y-4 cursor-move">
    <li
      v-for="(item, index) in previewItems"
      :key="item.id"
      draggable="true"
      :class="[current === index && 'opacity-0']"
      @dragstart="onDragStart(index)"
      @dragover="onDragOver"
      @drag="onDrag"
      @drop="onDrop"
      @dragenter="onDragEnter($event, index)"
      @dragend="resetDrag"
    >
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SortableList',
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
