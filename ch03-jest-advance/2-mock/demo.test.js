// 自动去 __mock__ 里面去找, 之后引入的 fetchData 也是来自于 mock 里面的方法
jest.mock('./demo')

// 取消 mock
// jest.unmock('/demo')

// 如果在配置文件中开启了 automock: true
// jest 首先回去 mock 里面引入方法

import { fetchData } from './demo'
// import axios from 'axios'

// jest.mock('axios')

// getNumber 是来自真正的方法, 这时候无法使用 automock
const { getNumber } = jest.requireActual('./demo')


test('fetchData', () => {
  // axios.get.mockResolvedValue({
  //   data: `(function(){return '123'})()`
  // })
  return fetchData().then(data => {
    // 如果返回的是方法，可以通过 eval 执行
    expect(eval(data)).toEqual('123')
  })
})

test('getNumber', () => {
  expect(getNumber()).toEqual(123)
})
