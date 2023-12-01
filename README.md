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

In a terminal window.

#### Run all tests

```
npm test
```
or simply 

```
npm t
```

### Run single test file

```
npm t -- path/to/test.js
```

### Run all tests within a folder

```
npm t -- path/
```

