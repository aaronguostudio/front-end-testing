import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index';

Enzyme.configure({ adapter: new Adapter() })

let wrapper = null

beforeEach(() => {
  wrapper = mount(<TodoList />)
})

it(`
  1. user input item in the input
  2. user click enter
  3. undoList should add the new item
`, () => {
  const inputElem = findInputElem(wrapper)
  const userInput = 'test'
  inputElem.simulate('change', {
    target: { value: userInput }
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(wrapper.state('undoList').length).toBe(1)
})

function findInputElem (wrapper) {
  return wrapper.find(`[data-test='input']`)
}
