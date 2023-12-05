function calibrationValue (input) {
  return input.split('\n')
    .map(s => s.match(/\d/g))
    .filter(a => a !== null)
    .map(a => parseInt(a[0] + a[a.length - 1], 10))
    .reduce((a, b) => a + b, 0)
}

function solution (input) {
  return {
    part1: calibrationValue(input),
    part2: '???'
  }
}

export { calibrationValue, solution }
