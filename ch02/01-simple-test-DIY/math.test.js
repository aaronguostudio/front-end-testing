// 测试想法的起源
var result = add(3, 7)
var expected = 10

if (result !== expected) {
  throw Error(`3 + 7 应该等于 ${expected}, 但是结果是 ${result}`)
}

var result = minus(3, 7)
var expected = -4

if (result !== expected) {
  throw Error(`3 7 7 应该等于 ${expected}, 但是结果是 ${result}`)
}

// 改造语法，让代码更加优雅

function test(desc, test) {
  try {
    test()
    console.log(`${desc} 通过测试`)
  } catch (e) {
    console.log(`${desc} 没有通过测试 ${e}`)
  }
}

function expect (result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期和实际不相等, 预期 ${actual}, 实际 ${result}`)
      }
    }
  }
}

test('测试加法', () => {
  expect(add(3, 3)).toBe(6)
})

test('测试减法', () => {
  expect(minus(3, 3)).toBe(0)
})
