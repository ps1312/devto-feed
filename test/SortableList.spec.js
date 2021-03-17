import { shallowMount } from '@vue/test-utils'
import SortableList from '@/components/SortableList.vue'

describe('SortableList.vue', () => {
  it('reorders list on drag and drop events', async () => {
    let wrappersList
    const wrapper = shallowMount(SortableList, {
      propsData: {
        itemProps: [0, 1, 2],
      },
    })

    wrappersList = await wrapper.findAll('li').wrappers
    await simulate(wrappersList[2], 'dragstart')
    await simulate(wrappersList[0], 'dragenter')
    await simulate(wrappersList[0], 'drop')
    expect(wrapper.vm.items).toStrictEqual([2, 0, 1])

    wrappersList = await wrapper.findAll('li').wrappers
    await simulate(wrappersList[1], 'dragstart')
    await simulate(wrappersList[0], 'dragenter')
    await simulate(wrappersList[0], 'drop')
    expect(wrapper.vm.items).toStrictEqual([0, 2, 1])

    wrappersList = await wrapper.findAll('li').wrappers
    await simulate(wrappersList[0], 'dragstart')
    await simulate(wrappersList[2], 'dragenter')
    await simulate(wrappersList[2], 'drop')
    expect(wrapper.vm.items).toStrictEqual([2, 1, 0])
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
