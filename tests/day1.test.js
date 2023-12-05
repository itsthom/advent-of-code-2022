import * as day1 from '../src/day1.js'

describe('calibrationValue', () => {
  test('first sample elf', () => {
    const input =
    `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`
    expect(day1.calibrationValue(input)).toBe(142)
  })
})
