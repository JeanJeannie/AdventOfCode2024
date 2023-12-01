# AdventOfCode2023
adventofcode.com/2023

## How to run in VSCode

From the terminal
```
node index.js
```

Debugging via (not currently working):

From `index.js` file

`Run` -> `Start debugging` -> `NodeJS` (if asked)

## How to run tests in VSCode

[NodeJS Unit Testing - get started quickly with examples](https://www.testim.io/blog/node-js-unit-testing-get-started-quickly-with-examples/)

### Setup
Initial installation of relevant node packages
```
npm i jest -save-dev
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Update package.json so the `"test"` command uses jest
```
  "scripts": {
    "test": "jest"
  },
```

### Troubleshooting

If the tests fail with:

> SyntaxError: Cannot use import statement outside a module

then try the steps mentioned [here](https://github.com/jestjs/jest/issues/9395#issuecomment-583799300)

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

