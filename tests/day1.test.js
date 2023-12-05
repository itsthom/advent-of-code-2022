import * as day1 from '../src/day1.js'

describe('calibrationValue', () => {
  test('first sample data', () => {
    const input =
    `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`
    expect(day1.calibrationValue(input)).toBe(142)
  })
})

describe('calibrationValueUpdated', () => {
  test('second sample data', () => {
    const input =
    `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`
    expect(day1.calibrationValueUpdated(input)).toBe(281)
  })
})
