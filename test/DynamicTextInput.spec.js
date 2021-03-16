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

  function buildWrapper(initialFields = []) {
    return mount(DynamicTextInput, {
      propsData: { initialFields },
    })
  }
})
