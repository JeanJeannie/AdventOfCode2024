# AdventOfCode2023
adventofcode.com/2023

## How to run in VSCode

From `index.js` file
`Run` -> `Start debugging` -> `NodeJS` (if asked)

## How to run tests in VSCode

[NodeJS Unit Testing - get started quickly with examples](https://www.testim.io/blog/node-js-unit-testing-get-started-quickly-with-examples/)

### Setup
Initial installation of relevant node packages
```
npm i jest -save-dev
```

Update package.json so the `"test"` command uses jest
```
  "scripts": {
    "test": "jest"
  },
```

### Run tests

Open a terminal window.

Run all tests:
```
npm test
```
or
```
jest
```
or
```
npm t
```

Run single tests

```
npm t -- path/to/test.js
```
or
```
npm t -- path/
```

