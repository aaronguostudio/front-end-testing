import Counter from './counter'

describe('test Counter', () => {

  let counter1 = null
  let counter2 = null

  beforeAll(() => {
    counter1 = new Counter()
  })

  beforeEach(() => {
    counter2 = new Counter()
  })

  afterAll(() => {})
  afterEach(() => {})

  describe('counter1', () => {
    test('counter1 addOne', () => {
      counter1.addOne()
      expect(counter1.number).toBe(1)
    })

    test('counter1 addTwo', () => {
      counter1.addTwo()
      expect(counter1.number).toBe(3)
    })

    test('counter1 minusOne', () => {
      counter1.minusOne()
      expect(counter1.number).toBe(2)
    })

    test('counter1 minusTwo', () => {
      counter1.minusTwo()
      expect(counter1.number).toBe(0)
    })
  })

  describe('counter2', () => {
    test('counter2 addOne', () => {
      counter2.addOne()
      expect(counter2.number).toBe(1)
    })

    test('counter2 addTwo', () => {
      counter2.addTwo()
      expect(counter2.number).toBe(2)
    })

    test('counter2 minusOne', () => {
      counter2.minusOne()
      expect(counter2.number).toBe(-1)
    })

    test('counter2 minusTwo', () => {
      counter2.minusTwo()
      expect(counter2.number).toBe(-2)
    })
  })
})

