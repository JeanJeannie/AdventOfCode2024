const day = require('../Part2');

describe("Get Game Number from input row", () => {
  test("it returns 1 when row starts with Game 1:", () => {
    let result = day.GetGameNumber("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green");
    expect(result).toBe(1)
  }),
  test("it returns null when row doesn't start with Game", () => {
    let result = day.GetGameNumber("bGame 1: blah blah");
    expect(result).toBeNull();
  })
})

describe("Get Game Sets", () => {
  test("it returns three sets when it contains 2 semicolons", () => {
    let result = day.GetGameSets("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
    expect(result.length).toBe(3);
  }),
  test("it returns three sets of details when it contains 2 semicolons", () => {
    let result = day.GetGameSets("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
    expect(result).toEqual(["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]);
  })
})

describe("Get blue cubes from a Game Set", () => {
  test("it returns 3 from the game set 3 blue, 4 red", () => {
    let result = day.CountCubesInSetByColour("3 blue, 4 red", "blue");
    expect(result).toBe(3);
  }),
  test("it returns 6 from the game set 1 red, 2 green, 6 blue", () => {
    let result = day.CountCubesInSetByColour("1 red, 2 green, 6 blue", "blue");
    expect(result).toBe(6)
  })
  test("it returns 0 from the game set 2 green", () => {
    let result = day.CountCubesInSetByColour("2 green", "blue");
    expect(result).toBe(0);
  })
})

describe("Get red cubes from a Game Set", () => {
  test("it returns 4 from the game set 3 blue, 4 red", () => {
    let result = day.CountCubesInSetByColour("3 blue, 4 red", "red");
    expect(result).toBe(4);
  }),
  test("it returns 1 from the game set 1 red, 2 green, 6 blue", () => {
    let result = day.CountCubesInSetByColour("1 red, 2 green, 6 blue", "red");
    expect(result).toBe(1)
  })
  test("it returns 0 from the game set 2 green", () => {
    let result = day.CountCubesInSetByColour("2 green", "red");
    expect(result).toBe(0);
  })
})

describe("Get green cubes from a Game Set", () => {
  test("it returns 0 from the game set 3 blue, 4 red", () => {
    let result = day.CountCubesInSetByColour("3 blue, 4 red", "green");
    expect(result).toBe(0);
  }),
  test("it returns 2 from the game set 1 red, 2 green, 6 blue", () => {
    let result = day.CountCubesInSetByColour("1 red, 2 green, 6 blue", "green");
    expect(result).toBe(2)
  })
  test("it returns 2 from the game set 2 green", () => {
    let result = day.CountCubesInSetByColour("2 green", "green");
    expect(result).toBe(2);
  })
})

