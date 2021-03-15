<template>
  <ul class="flex flex-col space-y-4 items-center">
    <li
      v-for="item in items"
      id="item"
      :key="item"
      draggable="true"
      class="h-16 w-16 bg-indigo-700 block text-white text-3xl flex justify-center items-center"
      @dragstart="onDragStart($event, item)"
      @dragover="onDragOver($event)"
      @drop="onDrop($event, item)"
    >
      {{ item }}
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
    onDrop(ev, to) {
      ev.preventDefault()
      const newItems = [...this.items]

      const from = ev.dataTransfer.getData('text/plain')
      const fromIndex = this.items.indexOf(Number(from))
      const toIndex = this.items.indexOf(to)

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
