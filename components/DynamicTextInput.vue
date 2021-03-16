<template>
  <form @submit.prevent>
    {{ inputFields }}
    <div
      v-for="(input, position) in inputFields"
      :id="'input-' + position"
      :key="position"
    >
      <input v-model="input.value" />
      <button aria-label="Remove" @click="removeField(position)">-</button>
    </div>

    <button aria-label="Add" @click="addField">+ Add</button>
  </form>
</template>

<script>
export default {
  name: 'DynamicTextInput',
  props: {
    initialInputFields: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      inputFields: [...this.initialInputFields],
    }
  },
  methods: {
    addField() {
      const newInputFields = [...this.inputFields]
      newInputFields.push({ position: this.inputFields.length + 1, value: '' })
      this.inputFields = newInputFields
    },
    removeField(index) {
      const newInputFields = [...this.inputFields]
      newInputFields.splice(index, 1)
      this.inputFields = newInputFields
    },
  },
}
</script>
