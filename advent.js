import * as repl from 'repl'
import { readInput } from './reader.js'
import * as d0 from './src/day0.js'
import * as d1 from './src/day1.js'
import * as d2 from './src/day2.js'

// yarn and node's native ESM support don't quite play nice yet :(
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const chalk = require('chalk')
// @ts-ignore
const program = require('commander').program

const solutions = {
  day0: { mod: d0, input: 'day0.txt' },
  day1: { mod: d1, input: 'day1.txt' },
  day2: { mod: d2, input: 'day2.txt' }
}

const solutionKeys = Object.keys(solutions)

function printSolution (day) {
  const dayMod = solutions[day]
  const solution = dayMod.mod.solution(readInput(dayMod.input))
  if (solution.part1 === '???' && solution.part2 === '???') {
    return chalk.gray.dim(`${day.toUpperCase()}: no solutions yet`)
  }
  return `\n${chalk.blue.bold.underline(`${day.toUpperCase()}`)}
  ${chalk.yellow('Part 1:')} ${solution.part1 === '???' ? chalk.gray(solution.part1) : chalk.green(solution.part1)}
  ${chalk.yellow('Part 2:')} ${solution.part2 === '???' ? chalk.gray(solution.part2) : chalk.green(solution.part2)}`
}

function replTime () {
  const replServer = repl.start({
    prompt: `${chalk.red.bold('\n🎅!')} ${chalk.green.bold('>')} `,
    useColors: true,
    useGlobal: true
  })

  replServer.context.readInput = readInput
  for (const k of solutionKeys) {
    const s = solutions[k]
    replServer.context[k] = s.mod
  }
  replServer.on('exit', () => {
    console.log(chalk.green.bold('\n ☃️  ⛄️ ☃️  See you soon!️ ☃️  ⛄️ ☃️\n'))
    process.exit()
  })
}

program
  .description(chalk.green.italic('~~ Your friendly neighborhood Advent of Code runner ~~'))
  .usage(chalk.yellow('<command>'))

program
  .command('all')
  .description('Run solution for every day')
  .action(() => {
    console.log(solutionKeys.map(k => printSolution(k)).join('\n'))
    process.exit()
  })

program
  .command('day <day>')
  .description('Run solution for a specific day')
  .action((day) => {
    const result = solutionKeys.includes(`day${day}`)
      ? printSolution(`day${day}`)
      : `${chalk.red.bold('!!!')} 🤔 The day you entered (${chalk.blue(day)}) doesn't make sense to me`
    console.log(`\n${result}\n`)
    process.exit()
  })

program
  .command('interactive')
  .description('Start a REPL session with all the modules loaded')
  .action(replTime)

program.parse(process.argv)
