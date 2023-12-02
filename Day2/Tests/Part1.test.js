const day = require('../Part1');

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

describe("Is game set possible", () => {
  test("Game set is possible if each set has less than max colour", () => {
    let result = day.IsGameSetPossible("1 red, 2 green, 6 blue");
    expect(result).toBe(true);
  }),
  test("Game set is not possible if more than 14 blue cubes", () => {
    let result = day.IsGameSetPossible("1 red, 2 green, 15 blue");
    expect(result).toBe(false);
  }),
  test("Game set is not possible if more than 13 green cubes", () => {
    let result = day.IsGameSetPossible("1 red, 16 green, 6 blue");
    expect(result).toBe(false);
  }),
  test("Game set is not possible if more than 12 red cubes", () => {
    let result = day.IsGameSetPossible("13 red, 2 green, 6 blue");
    expect(result).toBe(false);
  })
  test("Game set is possible if equal to max cubes", () => {
    let result = day.IsGameSetPossible("12 red, 13 green, 14 blue");
    expect(result).toBe(true);
  })
})

describe("Is game possible", () => {
  test("Returns 1 as Game 1 is possible as all sets are possible", () => {
    let result = day.ReturnGameNumberIfPossible("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green");
    expect(result).toBe(1)
  }),
  test("Returns 5 as Game 5 is possible as all sets are possible", () => {
    let result = day.ReturnGameNumberIfPossible("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green");
    expect(result).toBe(5)
  }),

  test("Returns 0 as Game 4 isnt possible as some sets aren't possible", () => {
    let result = day.ReturnGameNumberIfPossible("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red");
    expect(result).toBe(0)
  })
})