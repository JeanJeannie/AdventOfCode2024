const day = require('../Part1');

describe("example test", () => {
  test("it is true", () => { 
    expect(true).toBe(true);
  })
  test("it is false", () => { 
    expect(false).toBe(true);
  })
})

describe("Say hello", () => {
  test("it says hello world", () => {
    let res = day.SayHelloWorld();
    expect(res).toBe("Hello World!");
  })
})