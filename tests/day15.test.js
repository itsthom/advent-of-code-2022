import * as day15 from '../src/day15.js'
import { readInput } from '../reader.js'

describe('function: solution', () => {
  describe('with test input', () => {
    const solution = day15.solution('')
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })

  describe('with real input', () => {
    const solution = day15.solution(readInput('day15.txt'))
    test('part1', () => {
      expect(solution.part1).toBe('???')
    })
    test('part2', () => {
      expect(solution.part2).toBe('???')
    })
  })
})
