function elfCalorieSum (calories) {
  return calories.split('\n')
    .filter(x => x !== '')
    .map(x => parseInt(x, 10))
    .reduce((acc, curr) => acc + curr)
}

function highestCalElves (input, elves) {
  return input.split('\n\n')
    .map(x => elfCalorieSum(x))
    .sort((a, b) => a - b)
    .slice(-1 * elves)
    .reduce((acc, curr) => acc + curr)
}

function solution (input) {
  return {
    part1: highestCalElves(input, 1),
    part2: highestCalElves(input, 3)
  }
}

export { elfCalorieSum, highestCalElves, solution }
