import * as day2 from '../src/day2.js'

describe('scoreRound', () => {
  test('first round', () => {
    const input = 'A Y'
    expect(day2.scoreRound(input)).toBe(8)
  })
  test('second round', () => {
    const input = 'B X'
    expect(day2.scoreRound(input)).toBe(1)
  })
  test('third round', () => {
    const input = 'C Z'
    expect(day2.scoreRound(input)).toBe(6)
  })
})

describe('totalScore', () => {
  test('with sample input', () => {
    const input =
      `A Y
      B X
      C Z`
    expect(day2.totalScore(input, day2.scoreRound)).toBe(15)
  })
})
