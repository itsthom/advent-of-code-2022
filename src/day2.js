const SCORES = {
  X: { A: 1 + 3, B: 1 + 0, C: 1 + 6 },
  Y: { A: 2 + 6, B: 2 + 3, C: 2 + 0 },
  Z: { A: 3 + 0, B: 3 + 6, C: 3 + 3 }
}

function scoreRound (input) {
  const round = input.split(' ')
    .filter(x => x !== '')
  const opponent = round[0]
  const me = round[1]
  return SCORES[me][opponent]
}

const SCORES_2 = {
  X: { A: 3 + 0, B: 1 + 0, C: 2 + 0 },
  Y: { A: 1 + 3, B: 2 + 3, C: 3 + 3 },
  Z: { A: 2 + 6, B: 3 + 6, C: 1 + 6 }
}

function scoreRound2 (input) {
  const round = input.split(' ').filter(x => x !== '')
  const opponent = round[0]
  const result = round[1]
  return SCORES_2[result][opponent]
}

function totalScore (input, parseFunction) {
  return input.split('\n')
    .filter(x => x !== '')
    .map(parseFunction)
    .reduce((acc, curr) => acc + curr)
}

function solution (input) {
  return {
    part1: totalScore(input, scoreRound),
    part2: totalScore(input, scoreRound2)
  }
}

export { scoreRound, totalScore, solution }
