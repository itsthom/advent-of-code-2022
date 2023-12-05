function calibrationValue (input) {
  return input.split('\n')
    .map(s => s.match(/\d/g))
    .filter(a => a !== null)
    .map(a => parseInt(a[0] + a[a.length - 1], 10))
    .reduce((a, b) => a + b, 0)
}

function strToDigitChar (str) {
  const mapping = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }
  return mapping[str] || str
}

function calibrationValueUpdated (input) {
  return input.split('\n')
    .map(s => s.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g))
    .filter(a => a !== null)
    .map(a => parseInt(strToDigitChar(a[0]) + strToDigitChar(a[a.length - 1]), 10))
    .reduce((a, b) => a + b, 0)
}

function solution (input) {
  return {
    part1: calibrationValue(input),
    part2: calibrationValueUpdated(input)
  }
}

export { calibrationValue, calibrationValueUpdated, solution }
