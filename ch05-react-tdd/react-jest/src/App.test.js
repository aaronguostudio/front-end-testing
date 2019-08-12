import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // const container = div.getElementsByClassName('App')
  // expect(container.length).toBe(1)

  // shallow 只会渲染 App 这个组件，不会渲染内部的实现
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()

  const container = expect(wrapper.find(`[data-test='container']`))

  // wrapper.debug() 可以把 dom 内容打印出来，帮助测试
  expect(wrapper.find('.app').length).toBe(1)
  expect(wrapper.find('.app').prop('title')).toBe('aaron')

  // 这样写，代码就不会和测试耦合了
  expect(wrapper.find(`[data-test='container']`).length).toBe(1)

  // jest-enzyme 提供的快捷语法
  container.toExist()
  container.toHaveProp('title', 'aaron')


});
