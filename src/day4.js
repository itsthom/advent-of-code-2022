function parseCard (str) {
  const [id, rest] = str.split(/: +/)
  const [winners, picks] = rest.split(/ +\| +/)

  return {
    id: parseInt(id.split(' ')[1], 10),
    winningNumbers: winners.split(/ +/g).map(s => parseInt(s, 10)),
    numbersPresent: picks.split(/ +/g).map(s => parseInt(s, 10))
  }
}

function scoreCard (card) {
  let winners = 0
  for (const pick of card.numbersPresent) {
    if (card.winningNumbers.includes(pick)) {
      winners++
    }
  }

  return winners > 0 ? Math.pow(2, winners - 1) : winners
}

function sumOfWinPoints (input) {
  return input.split('\n')
    .filter(str => str.length > 0)
    .map(str => str.trim())
    .map(str => parseCard(str))
    .map(card => scoreCard(card))
    .reduce((acc, obj) => acc + obj, 0)
}

function solution (input) {
  return {
    part1: sumOfWinPoints(input),
    part2: '???'
  }
}

export { parseCard, sumOfWinPoints, solution }
