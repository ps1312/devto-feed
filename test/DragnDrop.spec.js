import { mount } from '@vue/test-utils'
import DragnDrop from '@/components/DragnDrop.vue'

describe('DragnDrop.vue', () => {
  it('reorders list on drag and drop events', async () => {
    let wrappersList
    const wrapper = mount(DragnDrop, {
      propsData: {
        itemProps: [0, 1, 2],
      },
    })

    wrappersList = await wrapper.findAll('li').wrappers
    await simulate(wrappersList[2], 'dragstart')
    await simulate(wrappersList[0], 'dragover')
    await simulate(wrappersList[0], 'drop')
    expect(wrapper.vm.items).toStrictEqual([2, 1, 0])

    wrappersList = await wrapper.findAll('li').wrappers
    await simulate(wrappersList[1], 'dragstart')
    await simulate(wrappersList[0], 'dragover')
    await simulate(wrappersList[0], 'drop')
    expect(wrapper.vm.items).toStrictEqual([1, 2, 0])

    wrappersList = await wrapper.findAll('li').wrappers
    await simulate(wrappersList[0], 'dragstart')
    await simulate(wrappersList[2], 'dragover')
    await simulate(wrappersList[2], 'drop')
    expect(wrapper.vm.items).toStrictEqual([0, 2, 1])
  })

  const dataTransferMock = {
    data: null,

    setData(_type, from) {
      this.data = from
    },

    getData() {
      return this.data
    },
  }

  async function simulate(el, event) {
    await el.trigger(event, {
      dataTransfer: dataTransferMock,
    })
  }
})
