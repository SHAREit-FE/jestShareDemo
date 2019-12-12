import { shallowMount } from '@vue/test-utils'
import Header from '../../src/views/TodoList/components/Header'
it('Header 中 input 框输入回车，有内容时，向外触发事件, 同时清空 inputValue', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('mandyma')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
});
