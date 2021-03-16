<template>
  <div>
    <input v-for="input in inputFields" :key="input" />
    <button @click="addField">+ Add</button>
  </div>
</template>

<script>
export default {
  name: 'DynamicTextInput',
  data() {
    return {
      inputFields: [],
    }
  },
  methods: {
    addField() {
      this.inputFields.push(this.inputFields.length + 1)
    },
  },
}
</script>
