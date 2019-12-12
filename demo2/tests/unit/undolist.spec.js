import { shallowMount } from '@vue/test-utils'
import UndoList from '../../src/views/TodoList/components/UndoList'
it('点击单元测试，向外触发删除事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [1, 2, 3] }
  })
  const delBtn = wrapper.find('[data-test="delete-button"]')
  delBtn.trigger('click')
  expect(wrapper.emitted().delete).toBeTruthy()
})
