import * as day1 from '../src/day1.js'

describe('elfCalorieSum', () => {
  test('first sample elf', () => {
    const input =
    `1000
    2000
    3000`
    expect(day1.elfCalorieSum(input)).toBe(6000)
  })
  test('second sample elf', () => {
    const input =
    '4000'
    expect(day1.elfCalorieSum(input)).toBe(4000)
  })
  test('third sample elf', () => {
    const input =
    `5000
    6000`
    expect(day1.elfCalorieSum(input)).toBe(11000)
  })
  test('fourth sample elf', () => {
    const input =
    `7000
    8000
    9000`
    expect(day1.elfCalorieSum(input)).toBe(24000)
  })
  test('fifth sample elf', () => {
    const input =
    '10000'
    expect(day1.elfCalorieSum(input)).toBe(10000)
  })
})

describe('highestCalElf', () => {
  test('with sample input', () => {
    const input =
      `1000
      2000
      3000

      4000

      5000
      6000

      7000
      8000
      9000

      10000`
    expect(day1.highestCalElf(input)).toBe(24000)
  })
})
