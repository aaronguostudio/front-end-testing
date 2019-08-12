import timer from './demo'

beforeEach(() => {
  jest.useFakeTimers()
})

test('timer', () => {
  const fn = jest.fn()
  timer(fn)

  // 立即执行 fake timer
  // jest.runAllTimers()
  // expect(fn).toHaveBeenCalledTimes(2)

  // 只运行在队列中的 timer
  // jest.runOnlyPendingTimers()
  // expect(fn).toHaveBeenCalledTimes(1)

  // 快进 30 秒
  jest.advanceTimersByTime(30000)
  expect(fn).toHaveBeenCalledTimes(1)

  // 再快进 30 秒
  jest.advanceTimersByTime(30000)
  expect(fn).toHaveBeenCalledTimes(2)
})

test('timer', () => {
  const fn = jest.fn()
  timer(fn)

  // 立即执行 fake timer
  // jest.runAllTimers()
  // expect(fn).toHaveBeenCalledTimes(2)

  // 只运行在队列中的 timer
  // jest.runOnlyPendingTimers()
  // expect(fn).toHaveBeenCalledTimes(1)

  // 快进 30 秒
  jest.advanceTimersByTime(30000)
  expect(fn).toHaveBeenCalledTimes(1)

  // 再快进 30 秒
  jest.advanceTimersByTime(30000)
  expect(fn).toHaveBeenCalledTimes(2)
})
