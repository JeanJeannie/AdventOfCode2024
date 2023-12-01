const day = require('../Part1');

describe("Is Number", () => {
  test("it is false when input is a letter", () => { 
    let res = day.IsNumber('A');
    expect(res).toBe(false);
  }),
  test("it is true when input is a number", () => { 
    let res = day.IsNumber('4');
    expect(res).toBe(true);
  })
});

describe("Parse Number", () => {
  test("it returns empty when no numbers", () => {
    let res = day.ParseNumbers("abc");
    expect(res).toEqual([])
  }),
  test("it returns only numbers", () => {
    let res = day.ParseNumbers("a1b2");
    expect(res).toEqual([1, 2])
  })
})

describe("Return last number", () => {
  test("it returns the last number", () => {
    let res = day.FindLastNumber("a1b2c3def");
    expect(res).toBe(3);
  }), 
  test("it returns null when no number provided", () => {
    let res = day.FindLastNumber("zyxabc");
    expect(res).toBeNull();
  })
})

describe("Return first number", () => {
  test("it returns the first number", () => {
    let res = day.FindFirstNumber("a1b2c3def");
    expect(res).toBe(1);
  }), 
  test("it returns null when no number provided", () => {
    let res = day.FindFirstNumber("zyxabc");
    expect(res).toBeNull();
  })
})


describe("Return first and last number", () => {
  test("it returns empty when no numbers", () => {
    let res = day.FirstAndLastNumbersInText("abc");
    expect(res).toEqual([])
  }),
  test("it returns 2 numbers when text only has 1 number", () => {
    let res = day.FirstAndLastNumbersInText("a1bc").length;
    expect(res).toBe(2)
  }),
  test("it returns the first number twice when text only has 1 number", () => {
    let res = day.FirstAndLastNumbersInText("a1bc");
    expect(res).toEqual([1,1])
  }),
  test("it returns two numbers when text has 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("a1b3c").length;
    expect(res).toBe(2)
  }),
  test("it returns both numbers when text has 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("a1b3c");
    expect(res).toEqual([1, 3])
  }),
  test("it returns two numbers when text has more than 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("a1b3c456c7dd").length;
    expect(res).toBe(2)
  }),
  test("it returns first and last numbers when text has more than 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("a1b3c456c7dd");
    expect(res).toEqual([1, 7])
  })
})

describe("Return first and last number combined as a single number", () => {
  test("it returns 0 when no numbers", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("abc");
    expect(res).toBe(0)
  }),
  test("it returns the number when text only has 1 number", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("a7bc");
    expect(res).toBe(77)
  }),
  test("it returns combination of both numbers when text has 2 numbers", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("a1b3c");
    expect(res).toBe(13)
  }),
  test("it returns combination of first and last when text has more than 2 numbers", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("a1b3c456c7dd");
    expect(res).toBe(17)
  })
})
