# Advent of Code 2020!

Let's try this again! https://adventofcode.com

## How Do?

Install dependencies using:
```sh
yarn install
```

Run all the stuff in index (all solutions from every day) with:
```sh
yarn advent
```

To Run solutions for a specific day do:
```sh
yarn advent -d <number>
```

You can probably also figure out how to install the package globally so you can `advent [args]` instead of `yarn advent [args]` 🤷🏻
## Tests?

Tests use [Jest](https://jestjs.io/docs/en/getting-started.html), linter is ESLint with [Javascript Standard](https://standardjs.com/index.html) rules.

To use either CLI individually you can run them through yarn:
```sh
# lint a file
yarn eslint advent.js

# lint it all
yarn eslint .

# lint it all and autofix when available
yarn eslint . --fix

# run tests from a day (include enough in the pattern so it doesn't also run day10, day11 when you put 'day1')
yarn jest day1.t

# run tests and generate coverage report like a nerd
yarn jest --coverage

# run jest in watch mode (runs related tests on file change)
yarn jest --watch
```

Helpful yarn scripts:
```sh
# lint and test everything
yarn test

# eslint-watch (lint on file change, only runs most recent file, hit enter to run everything)
yarn watch-lint

# alias for yarn jest --watch
yarn watch-test
```
