import { generateConfig, generateAnotherConfig } from './demo'

test('test generateConfig', () => {
  // 仅仅运行一次，生成之后就不再执行了
  // 所以修改了配置文件的话，就需要重新生成快照
  // press u 之后可以更新快照
  // time 这个可以是任何 Date
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date) // any(Number)...
  })
})

test('test generateAnotherConfig', () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date)
  })
})
