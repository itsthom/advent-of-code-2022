function checkSpotForSymbol (engine, x, y) {
  return engine[y] &&
    engine[y][x] &&
    engine[y][x].match(/[^\d.]/)
}

function checkAroundNumber (engine, xStart, xEnd, y) {
  // to the left
  if (checkSpotForSymbol(engine, xStart - 1, y)) {
    return true
  }

  // to the right
  if (checkSpotForSymbol(engine, xEnd, y)) {
    return true
  }

  // above
  if (y - 1 >= 0) {
    for (let x = xStart - 1; x < xEnd + 1; x++) {
      if (checkSpotForSymbol(engine, x, y - 1)) {
        return true
      }
    }
  }

  // below
  if (y + 1 < engine.length) {
    for (let x = xStart - 1; x < xEnd + 1; x++) {
      if (checkSpotForSymbol(engine, x, y + 1)) {
        return true
      }
    }
  }

  return false
}

// returns a 2d array (array of strings), indexed y, x
function createEngine (input) {
  return input.split('\n')
    .map(str => str.trim())
    .filter(str => str.length > 0)
}

function sumPartNumbers (input) {
  const engine = createEngine(input)
  const partNumbers = []
  for (let y = 0; y < engine.length; y++) {
    let numStart, numEnd
    let inNumber = false
    for (let x = 0; x < engine[0].length; x++) {
      const isDigit = !!engine[y][x].match(/\d/)
      const endOfRow = x === engine[0].length - 1

      if (inNumber) {
        if (isDigit) {
          if (endOfRow) {
            numEnd = x
            if (checkAroundNumber(engine, numStart, numEnd, y)) {
              partNumbers.push(engine[y].slice(numStart, numEnd + 1))
            }
          }
        } else {
          // not a digit; number ended in the space before this
          inNumber = false
          numEnd = x
          if (checkAroundNumber(engine, numStart, numEnd, y)) {
            partNumbers.push(engine[y].slice(numStart, numEnd))
          }
        }
      } else {
        // not in a number
        if (isDigit) {
          // start of a new digit
          inNumber = true
          numStart = x
          if (endOfRow) {
            // start AND end of digit
            numEnd = x
            if (checkAroundNumber(engine, numStart, numEnd, y)) {
              partNumbers.push(engine[y].slice(numStart, numEnd + 1))
            }
          }
        }
      }
    }
  }
  return partNumbers.map(str => parseInt(str, 10))
    .reduce((acc, obj) => acc + obj, 0)
}

function solution (input) {
  return {
    part1: sumPartNumbers(input),
    part2: '???'
  }
}

export { sumPartNumbers, solution }
