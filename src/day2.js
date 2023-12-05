
function parseDraw (str) {
  const counts = str.split(', ')
  const result = { red: 0, blue: 0, green: 0 }
  for (const count of counts) {
    const [qty, color] = count.split(' ')
    result[color] = parseInt(qty, 10)
  }
  return result
}

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue

function createGame (str) {
  const [id, results] = str.split(': ')
  let maxRed = 0
  let maxBlue = 0
  let maxGreen = 0
  const draws = results.split('; ')
  for (const draw of draws) {
    const parsedDraw = parseDraw(draw)
    maxRed = Math.max(maxRed, parsedDraw.red)
    maxBlue = Math.max(maxBlue, parsedDraw.blue)
    maxGreen = Math.max(maxGreen, parsedDraw.green)
  }

  return {
    id: parseInt(id.match(/\d+/g)[0], 10),
    red: maxRed,
    blue: maxBlue,
    green: maxGreen
  }
}

function gameIsPossible (game) {
  return game.red <= 12 && game.blue <= 14 && game.green <= 13
}

function sumPossibleIds (input) {
  return input.split('\n')
    .filter(str => str.length > 0)
    .map(str => createGame(str))
    .filter(game => gameIsPossible(game))
    .reduce((acc, obj) => acc + obj.id, 0)
}

function solution (input) {
  return {
    part1: sumPossibleIds(input),
    part2: '???'
  }
}

export { createGame, gameIsPossible, sumPossibleIds, solution }
