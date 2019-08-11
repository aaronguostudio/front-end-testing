import { fetchData, fetchData2, fetchData3 } from './fetchData'

test('fetchData', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done();
  })
})

test('fetchData2', async () => {
  const res = await fetchData2()
  expect(res.data).toEqual({
    success: true
  })
})

test('fetchData2', async () => {
  // 返回一个 Promise 然后用 resolves 去处理结果
  return expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

test('fetchData3', async () => {
  // 执行一个断言，说明肯定会抛出❌
  expect.assertions(1);
  try {
    await fetchData3()
  } catch (e) {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  }
})

test('fetchData3', async () => {
  // 返回一个 Promise 然后用 resolves 去处理结果
  return expect(fetchData3()).rejects.toThrow()
})

test('fetchData3', async () => {
  // 返回一个 Promise 然后用 resolves 去处理结果
  await expect(fetchData3()).rejects.toThrow()
})
