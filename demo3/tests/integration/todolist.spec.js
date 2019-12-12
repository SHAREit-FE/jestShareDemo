import { mount } from '@vue/test-utils'
import TodoList from '../../src/views/TodoList/TodoList.vue'
it(`
1.用户在header输入框内容
2.用户触发回车
3.列表中增加输入的内容`, () => {
  const wrapper = mount(TodoList)
  const input = wrapper.find('[data-test="input"]')
  const content = 'mandyma'
  input.setValue(content)
  input.trigger('change')
  input.trigger('keyup.enter')
  const listItems = wrapper.findAll('[data-test="list-item"]')
  expect(listItems.length).toBe(1)
  expect(listItems.at(0).text()).toContain(content)
})
