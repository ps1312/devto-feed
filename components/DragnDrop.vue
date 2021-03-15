<template>
  <ul class="flex flex-col space-y-4 items-center bg-green-400">
    <li
      v-for="(item, index) in items"
      id="item"
      :key="item.id"
      draggable="true"
      class="bg-indigo-700 block text-white text-3xl flex justify-center items-center"
      @dragstart="onDragStart($event, index)"
      @dragover="onDragOver($event)"
      @drag="onDrag"
      @drop="onDrop($event, index)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DragnDrop',
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
        window.scrollTo(0, window.scrollY - 5)
      }
    },
    onDrop(ev, toIndex) {
      ev.preventDefault()
      const newItems = [...this.items]
      const fromIndex = ev.dataTransfer.getData('text/plain')

      const temp = newItems[fromIndex]
      newItems[fromIndex] = newItems[toIndex]
      newItems[toIndex] = temp

      this.items = newItems
    },
    onDragOver(ev) {
      ev.preventDefault()
    },
  },
}
</script>

<style></style>
