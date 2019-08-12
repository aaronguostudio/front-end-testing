import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../../index';

Enzyme.configure({ adapter: new Adapter() })

let wrapper = null

beforeEach(() => {
  wrapper = shallow(<TodoList />)
})

it('TodoList init an empty list', () => {
  expect(wrapper.state('undoList')).toEqual([])
})

it('TodoList will pass a method of undeList', () => {
  const Header = findHeader(wrapper)
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
})

it('Header call enter will add item into undoList', () => {
  const Header = findHeader(wrapper)
  const addFunc = Header.prop('addUndoItem')
  addFunc('new item 1')
  addFunc('new item 2')
  expect(wrapper.state('undoList').length).toBe(2)
  expect(wrapper.state('undoList')[0]).toBe('new item 1')
  expect(wrapper.state('undoList')[1]).toBe('new item 2')
})

function findHeader (wrapper) {
  return wrapper.find('Header')
}
