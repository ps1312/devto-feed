import DynamicTextInput from '@/components/DynamicTextInput.vue'
import { mount } from '@vue/test-utils'

describe('DynamicTextInput.vue', () => {
  it('should start with no input field and a add button', () => {
    const wrapper = buildWrapper()

    expect(wrapper.findAll('input').length).toEqual(0)
    expect(wrapper.find('[aria-label="Add"]').text()).toBe('+ Add')
  })

  it('should create multiple input fields on multiple add button presses', async () => {
    const wrapper = buildWrapper()

    await wrapper.find('[aria-label="Add"]').trigger('click')
    expect(wrapper.findAll('input').length).toEqual(1)

    await wrapper.find('[aria-label="Add"]').trigger('click')
    expect(wrapper.findAll('input').length).toEqual(2)

    await wrapper.find('[aria-label="Add"]').trigger('click')
    expect(wrapper.findAll('input').length).toEqual(3)
  })

  it('should delete field on remove button click', async () => {
    const wrapper = buildWrapper()

    await wrapper.find('[aria-label="Add"]').trigger('click')
    await wrapper.find('[aria-label="Add"]').trigger('click')
    expect(wrapper.findAll('input').length).toEqual(2)

    const field = wrapper.find('#input-0')

    await field.find('[aria-label="Remove"]').trigger('click')
    expect(wrapper.findAll('input').length).toEqual(1)
  })

  it('should init with correct number of initialInputFields with its values', () => {
    const initialInputFields = [
      { position: 0, value: 'filled input 1' },
      { position: 1, value: 'filled input 2' },
      { position: 2, value: 'filled input 3' },
    ]

    const wrapper = buildWrapper(initialInputFields)

    const fields = wrapper.findAll('input')
    expect(fields.length).toEqual(3)

    fields.wrappers.forEach((field, index) => {
      expect(field.element.value).toContain(initialInputFields[index].value)
    })
  })

  it('should preserve previous values on add button click', async () => {
    const wrapper = buildWrapper()
    await wrapper.find('[aria-label="Add"]').trigger('click')

    const field = wrapper.find('#input-0')
    const input = field.find('input')
    await input.setValue('dumb value')

    await wrapper.find('[aria-label="Add"]').trigger('click')

    expect(input.element.value).not.toEqual('')
  })

  function buildWrapper(initialInputFields = []) {
    return mount(DynamicTextInput, {
      propsData: { initialInputFields },
    })
  }
})
