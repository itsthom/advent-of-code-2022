function elfCalorieSum (calories) {
  return calories.split('\n')
    .filter(x => x !== '')
    .map(x => parseInt(x, 10))
    .reduce((acc, curr) => acc + curr)
}

function highestCalElf (input) {
  return input.split('\n\n')
    .map(x => elfCalorieSum(x))
    .sort((a, b) => a - b)
    .pop()
}

function solution (input) {
  return {
    part1: highestCalElf(input),
    part2: '???'
  }
}

export { elfCalorieSum, highestCalElf, solution }
