const day = require('../Part2');

describe("Is a number", () => {
  test("is true when input is a 2", () => {
    let result = day.IsNumber('2');
    expect(result).toBe(true);
  }),
  test("is false when input is a *", () => {
    let result = day.IsNumber('*');
    expect(result).toBe(false);
  }),
  test("is false when input is a .", () => {
    let result = day.IsNumber('.');
    expect(result).toBe(false);
  })
})


describe("Is a symbol", () => {
  test("is true when input is a $", () => {
    let result = day.IsSymbol('$');
    expect(result).toBe(true);
  }),
  test("is false when input is a 2", () => {
    let result = day.IsSymbol('2');
    expect(result).toBe(false);
  }),
  test("is false when input is a .", () => {
    let result = day.IsSymbol('.');
    expect(result).toBe(false);
  })
})

describe("Is Gear Symbol", () => {
  test("returns true when input is *", () =>{
    let result = day.IsGearSymbol("*");
    expect(result).toBe(true);
  }),
  test("returns false when input is $", () =>{
    let result = day.IsGearSymbol("*$");
    expect(result).toBe(false);
  })
})

describe("Find next number in row", () => {
  test("when start position is 0 it returns 467 that starts at position 0 and ends at position 2", () => {
    let result = day.FindNextNumberInRow("467..114..", 0);
    expect(result).toEqual( {number: 467, startPos: 0, endPos: 2});
  }),
  test("when start position is 4 it returns 114 that starts at position 5 and ends at position 7", () => {
    let result = day.FindNextNumberInRow("467..114..", 4);
    expect(result).toEqual( {number: 114, startPos: 5, endPos: 7});
  }),
  test("when start position is 8 it returns null", () => {
    let result = day.FindNextNumberInRow("467..114..", 8);
    expect(result).toBeNull();
  })
})

describe("Find next gear symbol in row", () => {
  test("when start position is 0 it returns position 4", () => {
    let result = day.FindNextGearSymbolInRow("467.*114*.", 0);
    expect(result).toBe(4);
  }),
  test("when start position is 5 it returns position 8", () => {
    let result = day.FindNextGearSymbolInRow("467.*114*.", 5);
    expect(result).toBe(8);
  }),
  test("when start position is 0 it returns null as no gear symbols", () => {
    let result = day.FindNextGearSymbolInRow("467..114..", 0);
    expect(result).toBeNull();
  })
})

describe("Find part numbers adjacent to gear", () => {
  test("returns 467 and 35", () => {
    let result = day.FindPartNumbersNextToGear(["467..114..", "...*......", "..35..633."], 1, 3);
    expect(result).toEqual([467, 35]);
  }),
  test("returns 755 and 598", () => {
    let result = day.FindPartNumbersNextToGear(["......755.","...$.*....", ".664.598.."], 1, 5);
    expect(result).toEqual([755, 598]);
  }),
  test("returns null", () => {
    let result = day.FindPartNumbersNextToGear(["..........","...$.*....", ".664......"], 1, 5);
    expect(result).toBeNull();
  })
})


describe("Is next to a symbol", () => {
  test("returns true if a symbol is above a number", () => {
    let result = day.IsNextToASymbol([".(.", ".2.", "..."], 1, 1, 1);
    expect(result).toBe(true);
  }),
  test("returns true if a symbol is below a number", () => {
    let result = day.IsNextToASymbol(["...", ".2.", "$.."], 1, 1, 1);
    expect(result).toBe(true);
  }), 
  test("returns true if a symbol is left of a number", () => {
    let result = day.IsNextToASymbol(["...", "$2.", "..."], 1, 1, 1);
    expect(result).toBe(true);
  }),
  test("returns true if a symbol is right of a number", () => {
    let result = day.IsNextToASymbol(["123", "45$", "678"], 1, 1, 1);
    expect(result).toBe(true);
  }), 
  test("returns false if no symbol surrounds a number", () => {
    let result = day.IsNextToASymbol(["...", ".2.", "..."], 1, 1, 1);
    expect(result).toBe(false);
  }),
  test("returns false if no symbol surrounds a number", () => {
    let result = day.IsNextToASymbol(["...", "..2", "..."], 1, 2, 2);
    expect(result).toBe(false);
  }),
  test("returns false if no symbol surrounds a number", () => {
    let result = day.IsNextToASymbol(["2..", "...", "..."], 0, 0, 0);
    expect(result).toBe(false);
  })
})

describe("It returns part numbers in a row", () => {
  test("It returns 467 as a part number", () => {
    let result = day.ReturnPartNumbers(["467..114..", "...*......"]);
    expect(result).toEqual([467])
  }),
  test("It returns 467 as a part number", () => {
    let result = day.ReturnPartNumbers(["......755.","...$.*....", ".664.598.."]);
    expect(result).toEqual([755, 664, 598])
  }),

  test("It returns null as no part numbers", () => {
    let result = day.ReturnPartNumbers(["467..114..", "...3......"]);
    expect(result).toBeNull();
  })
})

describe("Return gear ratios", () => {
  test("it returns 16345 and 451490", () => {
    let result = day.ReturnGearRatios(["467..114..", "...*......", "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.","...$.*....", ".664.598.."]);
    expect(result).toEqual([16345, 451490]);
  })
})