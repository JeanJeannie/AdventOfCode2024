const day = require('../Part2');

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

describe("Read literal numbers", () => {
  test("it returns 1 when input is one", () => {
    let res = day.ParseTextAsNumber("one");
    expect(res).toBe(1);
  }),
  test("it returns 7 when input is seven", () => {
    let res = day.ParseTextAsNumber("seven");
    expect(res).toBe(7);
  }),
  test("it returns null when input is not a number", () => {
    let res = day.ParseTextAsNumber("onne");
    expect(res).toBeNull();
  })
})

describe("Get list of literal numbers", () => {
  test("returns array of literal numbers", () => {
    let res = day.LiteralNumbers();
    expect(res).toEqual(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']);
  })
})

describe("Get literal numbers as arrays", () => {
  test("returns o n e from first element", () => {
    let res = day.LiteralNumbersAsArray();
    expect(res[0]).toEqual(['o','n','e']);
  }), 
  test("returns s i x from sixth element", () => {
    let res = day.LiteralNumbersAsArray();
    expect(res[5]).toEqual(['s','i','x']);
  })
})

describe("Get last character of literal numbers", () => {
  test("returns e from first element", () => {
    let res = day.LastLetterOfLiteralNumbers();
    expect(res[0]).toBe('e');
  }), 
  test("returns n from seventh element", () => {
    let res = day.LastLetterOfLiteralNumbers();
    expect(res[6]).toBe('n');
  }),
  test("returns eoerexnteo as the last numbers of the literal numbers", () => {
    let res = day.LastLetterOfLiteralNumbers();
    expect(res).toEqual(['e','o','e','r','e','x','n','t','e','o']);
  })
})

describe("Get first character of literal numbers", () => {
  test("returns o from first element", () => {
    let res = day.FirstLetterOfLiteralNumbers();
    expect(res[0]).toBe('o');
  }), 
  test("returns s from seventh element", () => {
    let res = day.FirstLetterOfLiteralNumbers();
    expect(res[6]).toBe('s');
  }),
  test("returns ottffssenz as the first numbers of the literal numbers", () => {
    let res = day.FirstLetterOfLiteralNumbers();
    expect(res).toEqual(['o','t','t','f','f','s','s','e','n','z']);
  })
})

describe("Find potential literals starting with the letter provided", () => {
  test("returns one when input given is o", () => {
    let res = day.FindPotentialLiteralsStartingWith("o");
    expect(res).toEqual(["one"]);
  }), 
  test("returns six, seven when input given is s", () => {
    let res = day.FindPotentialLiteralsStartingWith("s");
    expect(res).toEqual(["six", "seven"]);
  }),
  test("returns empty array when input given is d", () => {
    let res = day.FindPotentialLiteralsStartingWith("d");
    expect(res).toEqual([]);
  })
})

describe("Find potential literals ending with the letter provided", () => {
  test("returns six when input given is x", () => {
    let res = day.FindPotentialLiteralsEndingWith("x");
    expect(res).toEqual(["six"]);
  }), 
  test("returns one, three, five, nine when input given is e", () => {
    let res = day.FindPotentialLiteralsEndingWith("e");
    expect(res).toEqual(["one", "three", "five", "nine"]);
  }),
  test("returns empty array when input given is d", () => {
    let res = day.FindPotentialLiteralsEndingWith("d");
    expect(res).toEqual([]);
  })
})

describe("Find last matching literal", () => {
  test("returns 1 when input given is sixbcdefone", () => {
    let res = day.FindLastMatchingLiteral("sixbcdefone".split(''));
    expect(res).toBe(1);
  }),
  test("returns 3 when input given is azerobcdthree", () => {
    let res = day.FindLastMatchingLiteral("azerobcdthree".split(''));
    expect(res).toBe(3);
  }),
  test("returns 8 when input given is oneight", () => {
    let res = day.FindLastMatchingLiteral("oneight".split(''));
    expect(res).toBe(8);
  }),
  test("returns 6 when input given is cdefsix", () => {
    let res = day.FindLastMatchingLiteral("cdefsix".split(''));
    expect(res).toBe(6);
  }),
  test("returns null when input given is abcdef", () => {
    let res = day.FindLastMatchingLiteral("abcdef".split(''));
    expect(res).toBeNull();
  })
})


describe("Find first matching literal", () => {
  test("returns 1 when input given is onebcdef", () => {
    let res = day.FindFirstMatchingLiteral("onebcdef".split(''));
    expect(res).toBe(1);
  }),
  test("returns 3 when input given is threebcdef", () => {
    let res = day.FindFirstMatchingLiteral("threebcdef".split(''));
    expect(res).toBe(3);
  }),
  test("returns 2 when input given is twobcdef", () => {
    let res = day.FindFirstMatchingLiteral("twobcdef".split(''));
    expect(res).toBe(2);
  }),
  test("returns 6 when input given is sixbcdef", () => {
    let res = day.FindFirstMatchingLiteral("sixbcdef".split(''));
    expect(res).toBe(6);
  }),
  test("returns null when input given is abcdef", () => {
    let res = day.FindFirstMatchingLiteral("abcdef".split(''));
    expect(res).toBeNull();
  })
})

describe("Find first matching number", () => {
  test("returns 1 when input given is abconebcdef", () => {
    let res = day.FindFirstMatchingNumber("abconebcdef");
    expect(res).toBe(1);
  }),
  test("returns 3 when input given is abcthree", () => {
    let res = day.FindFirstMatchingNumber("abcthree");
    expect(res).toBe(3);
  }),
  test("returns 2 when input given is two3bcdef", () => {
    let res = day.FindFirstMatchingNumber("two3bcdef");
    expect(res).toBe(2);
  }),
  test("returns 6 when input given is se6xonebcdef", () => {
    let res = day.FindFirstMatchingNumber("se6xonebcdef");
    expect(res).toBe(6);
  }),
  test("returns null when input given is sexoebcdef", () => {
    let res = day.FindFirstMatchingNumber("sexoebcdef");
    expect(res).toBeNull();
  })
})

describe("Find last matching number", () => {
  test("returns 1 when input given is abconebcdef", () => {
    let res = day.FindLastMatchingNumber("abconebcdef");
    expect(res).toBe(1);
  }),
  test("returns 3 when input given is abcthree", () => {
    let res = day.FindLastMatchingNumber("abcthree");
    expect(res).toBe(3);
  }),
  test("returns 3 when input given is two3bcdef", () => {
    let res = day.FindLastMatchingNumber("two3bcdef");
    expect(res).toBe(3);
  }),
  test("returns 1 when input given is se6xonebcdef", () => {
    let res = day.FindLastMatchingNumber("se6xonebcdef");
    expect(res).toBe(1);
  }),
  test("returns 3 when input given is a1bthreec", () => {
    let res = day.FindLastMatchingNumber("a1bthreec");
    expect(res).toBe(3);
  }),
  test("returns null when input given is sexoebcdef", () => {
    let res = day.FindLastMatchingNumber("sexoebcdef");
    expect(res).toBeNull();
  }) //a1bthreec
})


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
    let res = day.FirstAndLastNumbersInText("a1bthreec").length;
    expect(res).toBe(2)
  }),
  test("it returns both numbers when text has 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("a1bthreec");
    expect(res).toEqual([1, 3])
  }),
  test("it returns two numbers when text has more than 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("aoneb3c456c7dd").length;
    expect(res).toBe(2)
  }),
  test("it returns first and last numbers when text has more than 2 numbers", () => {
    let res = day.FirstAndLastNumbersInText("aoneb3c456c7dd");
    expect(res).toEqual([1, 7])
  })
})

describe("Return first and last number combined as a single number", () => {
  test("it returns 0 when no numbers", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("abc");
    expect(res).toBe(0)
  }),
  test("it returns the number when text only has 1 literal number", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("asevenbc");
    expect(res).toBe(77)
  }),
  test("it returns the number when text only has 1 number", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("a7bc");
    expect(res).toBe(77)
  }),
  test("it returns combination of both numbers when text has 2 numbers", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("aonebthreec");
    expect(res).toBe(13)
  }),
  test("it returns combination of first and last when text has more than 2 numbers", () => {
    let res = day.CombinationOfFirstAndLastNumbersInText("a1b3c456csevendd");
    expect(res).toBe(17)
  })
})
