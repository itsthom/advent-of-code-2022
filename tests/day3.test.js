import * as day3 from '../src/day3.js'

describe('createEngine', () => {
  test('first sample data', () => {
    const input =
    `467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..`
    expect(day3.sumPartNumbers(input)).toBe(4361)
  })
})
