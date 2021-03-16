import DynamicTextInput from '@/components/DynamicTextInput.vue'
import { mount } from '@vue/test-utils'

describe('DynamicTextInput.vue', () => {
  it('should start with a input field and a add button', () => {
    const wrapper = mount(DynamicTextInput)

    expect(wrapper.findAll('input').length).toEqual(1)
    expect(wrapper.find('button').text()).toBe('+ Add')
  })
})
