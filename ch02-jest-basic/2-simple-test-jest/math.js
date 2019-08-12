function add (a, b) {
  return a + b
}

function minus (a, b) {
  return a - b
}

function multi (a, b) {
  return a * b
}

// 保证浏览器端可以正常加载
try {
  module.exports = {
    add, minus, multi
  }
} catch (e) {

}
