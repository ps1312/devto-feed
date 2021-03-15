import { mount } from '@vue/test-utils'
import DragnDrop from '@/components/DragnDrop.vue'

describe('DragnDrop.vue', () => {
  it('reorders list on drag and drop events', async () => {
    const wrapper = mount(DragnDrop)
    const wrappersList = await wrapper.findAll('li').wrappers

    const dataTransferMock = {
      data: null,

      setData(_type, from) {
        this.data = from
      },

      getData() {
        return this.data
      },
    }

    await wrappersList[2].trigger('dragstart', {
      dataTransfer: dataTransferMock,
    })

    const firstEl = wrappersList[0]
    await firstEl.trigger('dragover')

    await firstEl.trigger('drop', {
      dataTransfer: dataTransferMock,
    })

    expect(wrapper.vm.items).toStrictEqual([2, 1, 0])
  })
})
