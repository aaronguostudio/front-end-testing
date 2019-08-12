const Util = jest.fn(() => {
  console.log('> constructor')
})

Util.prototypes.a = jest.fn(() => {
  console.log('> a')
})
Util.prototypes.b = jest.fn()

export default Util
