export default (fn) => [
  setTimeout(() => {
    fn()
    setTimeout(() => {
      fn()
    }, 30000)
  }, 30000)
]
