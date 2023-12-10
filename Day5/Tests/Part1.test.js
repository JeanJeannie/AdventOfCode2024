const day = require('../Part1');

describe("Get seeds", () => {
  test("it returns array of seeds", () => {
    let result = day.ReadSeeds("seeds: 79 14 55 13");
    expect(result).toEqual([79, 14, 55, 13]);
  })
})

describe("Get seeds", () => {
  test("it returns array of seeds", () => {
    let result = day.ReadSeeds("seeds: 79 14 55 13");
    expect(result).toEqual([79, 14, 55, 13]);
  })
})

describe("Maps seeds to soil", () => {
  test("it returns an array of mappings", () => {
    let result = day.ReadMapping("50 98 2");
    expect(result).toEqual({source:[50, 51], destination:[98,99]});
  })
})

describe("", () => {
  test("", () => {
    let result = day.ReadMappingFile(["seeds: 79 14 55 13",
    "",
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    ""]);
    expect(result).toEqual({ seeds: [79, 14, 55, 13], soil:{ source:[50, 51, ], destination:[98,99] }})
  })
})
