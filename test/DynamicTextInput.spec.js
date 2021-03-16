import DynamicTextInput from '@/components/DynamicTextInput.vue'
import { mount } from '@vue/test-utils'

describe('DynamicTextInput.vue', () => {
  it('should start with a no input field and a add button', () => {
    const wrapper = mount(DynamicTextInput)

    expect(wrapper.findAll('input').length).toEqual(0)
    expect(wrapper.find('button').text()).toBe('+ Add')
  })

  it('should create a input field on add button press', async () => {
    const wrapper = mount(DynamicTextInput)

    await wrapper.find('button').trigger('click')
    expect(wrapper.findAll('input').length).toEqual(1)
  })
})
