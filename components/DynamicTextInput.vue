<template>
  <div>
    <div
      v-for="(input, index) in inputFields"
      :id="'input-' + index"
      :key="input.id"
    >
      <input :value="input.value" />
      <button aria-label="Remove" @click="removeField(index)">-</button>
    </div>

    <button aria-label="Add" @click="addField">+ Add</button>
  </div>
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
      newInputFields.push({ id: this.inputFields.length + 1 })
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
