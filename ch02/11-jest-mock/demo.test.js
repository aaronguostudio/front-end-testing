import { runCallback, createObject, getData } from './demo.js'
import axios from 'axios'
jest.mock('axios')

test('test runCallback', () => {
  // 'def' 将会被返回
  const func = jest.fn(() => {
    console.log('> mock implementation')
    return 'def'
  })

  // 相当于在构造函数中传递
  // func.mockImplementation(() => {})
  // func.mockImplementationOnce(() => {})

  // this will affect all func returns
  // func.mockReturnValue('test')

  // 只有第一次会被返回
  func
    .mockReturnValueOnce('Once')
    .mockReturnValueOnce('Twice')

  runCallback(func)
  runCallback(func)
  runCallback(func)
  expect(func).toBeCalled()
  expect(func.mock.calls.length).toBe(3)
  expect(func.mock.calls[0]).toEqual(['abc'])
  expect(func).toBeCalledWith('abc') // 每次被调用时传入了 abc
  expect(func.mock.results[0].value).toEqual('Once')
  expect(func.mock.results[1].value).toEqual('Twice')
  expect(func.mock.results[2].value).toEqual('def')

  console.log(func.mock)
})

test('test createObject', () => {
  const func = jest.fn()

  createObject(func)
  console.log(func.mock)
})

// 改变内部函数的内部实现
test('test getData', async () => {

  axios.get.mockResolvedValue({data: 'hello'})
  axios.get.mockResolvedValueOnce({data: 'hello world'})

  await getData()
          .then(data => {
            expect(data).toBe('hello world')
          })

  await getData()
          .then(data => {
            expect(data).toBe('hello')
          })
})
