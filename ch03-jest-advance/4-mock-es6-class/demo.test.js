// 如果发现 util 是一个类，会自动把类的构造方法和方法编程 jest.fn()
// 也可以通过 __mock__ 来创建自动以的 mock
jest.mock('./util')
import Util from './util'

import demoFunction from './demo'

// 比如 util.a and util.b 里面的实现都非常复杂
// 我们测试的重点不是 util.a and util.b
// 通过这样的测试，util util.a 和 util.b 都是 jest.fn
// 具体 util 里面的测试是在 util.test.js 里面去做

test('demoFunction', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
