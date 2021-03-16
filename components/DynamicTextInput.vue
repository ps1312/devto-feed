<template>
  <form
    class="p-6 border border-indigo-500 rounded-md w-1/3 mx-auto"
    @submit.prevent
  >
    <div
      v-for="(input, position) in inputFields"
      :id="'input-' + position"
      :key="position"
    >
      <div class="pt-6 flex">
        <input
          v-model="input.value"
          type="text"
          class="px-2 py-1 rounded-md border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 flex-grow mr-4"
        />
        <button
          class="px-4 py-1 rounded-md bg-gray-100"
          aria-label="Remove"
          @click="removeField(position)"
        >
          -
        </button>
      </div>
    </div>

    <button
      class="mt-8 p-2 w-full rounded-md bg-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
      aria-label="Add"
      @click="addField"
    >
      <span class="font-bold">+ Add</span>
    </button>
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
      let newInputFields = [...this.inputFields]
      newInputFields.splice(index, 1)

      newInputFields = newInputFields.map((field, position) => ({
        ...field,
        position: position + 1,
      }))

      this.inputFields = newInputFields
    },
  },
}
</script>
