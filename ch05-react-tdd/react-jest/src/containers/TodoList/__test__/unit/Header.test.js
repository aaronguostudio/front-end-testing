import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';

Enzyme.configure({ adapter: new Adapter() })

let wrapper = null

beforeEach(() => {
  wrapper = shallow(<Header />)
})

it('Header contains an input', () => {
  const inputElem = wrapper.find(`[data-test='input']`)
  expect(inputElem.length).toBe(1)
})

it('Header content is null', () => {
  const inputElem = wrapper.find(`[data-test='input']`)
  expect(inputElem.prop('value')).toEqual('')
})

it('Header input value change when input', () => {
  const inputElem = wrapper.find(`[data-test='input']`)
  const userInput = 'test'
  inputElem.simulate('change', {
    target: { value: userInput }
  })
  expect(wrapper.state('value')).toEqual(userInput)

  // 测试数据，推荐一般做集成测试的时候测试
  // 这里需要创建新的实例，因为之前的 inputElem 不会改变状态
  // const newInputElem = wrapper.find(`[data-test='input']`)
  // expect(newInputElem.prop('value')).toBe(userInput)
})

it('Header input entered, if input has no content, do nothing', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputElem = findInputElem(wrapper)
  wrapper.setState({ value: '' })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).not.toHaveBeenCalled()
})

it('Header input entered, if input has content, fn will be called, and value will be cleared', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} />)
  const inputElem = findInputElem(wrapper)
  wrapper.setState({ value: 'new input' })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenLastCalledWith('new input')
  expect(wrapper.state('value')).toBe('')
})

function findInputElem (wrapper) {
  return wrapper.find(`[data-test='input']`)
}

