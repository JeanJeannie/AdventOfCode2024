const day = require('../Part1');

describe("Convert cards to numbers", () => {
  test("1 is 1", () => {
    let result = day.ConvertCards("1"); 
    expect(result).toBe(1);
  }),
  test("7 is 7", () => {
    let result = day.ConvertCards("7"); 
    expect(result).toBe(7);
  }),
  test("T is 10", () => {
    let result = day.ConvertCards("T"); 
    expect(result).toBe(10);
  }),
  test("J is 11", () => {
    let result = day.ConvertCards("J"); 
    expect(result).toBe(11);
  }),
  test("Q is 12", () => {
    let result = day.ConvertCards("Q"); 
    expect(result).toBe(12);
  }),
  test("K is 13", () => {
    let result = day.ConvertCards("K"); 
    expect(result).toBe(13);
  }),
  test("A is 14", () => {
    let result = day.ConvertCards("A"); 
    expect(result).toBe(14);
  })
})

describe("Get hand", () => {
  test("Gets unique items and their count", () => {
    let result = day.GetHand("AA133");
    expect(result).toEqual({"A": 2, "1": 1, "3": 2});
  })
})

describe("Five of a kind", () => {
  test("AAAAA returns true", () => {
    let result = day.IsFiveOfAKind("AAAAA");
    expect(result).toBe(true);
  }),
  test("66666 returns true", () => {
    let result = day.IsFiveOfAKind("66666");
    expect(result).toBe(true);
  }),
  test("66466 returns false", () => {
    let result = day.IsFiveOfAKind("66466");
    expect(result).toBe(false);
  })  
})

describe("Four of a kind", () => {
  test("AAA3A returns true", () => {
    let result = day.IsFourOfAKind("AAA3A");
    expect(result).toBe(true);
  }),
  test("66666 returns false", () => {
    let result = day.IsFourOfAKind("66666");
    expect(result).toBe(false);
  })  
})

describe("Three of a kind", () => {
  test("A2A3A returns true", () => {
    let result = day.IsThreeOfAKind("A2A3A");
    expect(result).toBe(true);
  }),
  test("66666 returns false", () => {
    let result = day.IsThreeOfAKind("66666");
    expect(result).toBe(false);
  })  
})

describe("Two of a kind", () => {
  test("A2A3T returns true", () => {
    let result = day.IsTwoOfAKind("A2A3T");
    expect(result).toBe(true);
  }),
  test("66666 returns false", () => {
    let result = day.IsTwoOfAKind("66666");
    expect(result).toBe(false);
  })  
})

describe("Full house", () => {
  test("AA33A returns true", () => {
    let result = day.IsFullHouse("AA33A");
    expect(result).toBe(true);
  }),
  test("66666 returns false", () => {
    let result = day.IsFullHouse("66666");
    expect(result).toBe(false);
  })  
})

describe("Two Pair", () => {
  test("A2A33 returns true", () => {
    let result = day.IsTwoPair("A2A3T");
    expect(result).toBe(true);
  }),
  test("66666 returns false", () => {
    let result = day.IsTwoPair("66666");
    expect(result).toBe(false);
  })  
})

