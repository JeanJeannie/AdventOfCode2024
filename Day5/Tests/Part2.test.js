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
/** 
describe("Maps seeds to soil", () => {
  test("it returns an array of mappings", () => {
    let result = day.ReadMapping("50 98 2");
    expect(result).toEqual({source:[50, 51], destination:[98,99]});
  })
})
**/
describe("Maps seeds to soil object", () => {
  test("it returns an object with an array of mappings", () => {
    let result = day.ReadMapping([
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    ""]);
    expect(result).toEqual({ result: {type: "seed-to-soil", map: [{ destination:50, source:98, length:2 }, 
      { destination:52, source:50, length:48 }]}, lastPos: 3})
  })
})

describe("Maps all mappings", () => {
  test("it returns an object with an array of mappings", () => {
    let result = day.ReadAllMappings([
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    "",
    "soil-to-fertilizer map:",
    "0 15 37",
    "37 52 2",
    "39 0 15",
    "",
    "fertilizer-to-water map:",
    "49 53 8",
    "0 11 42",
    "42 0 7",
    "57 7 4",
    "",
    "water-to-light map:",
    "88 18 7",
    "18 25 70",
    "",
    "light-to-temperature map:",
    "45 77 23",
    "81 45 19",
    "68 64 13",
    "",
    "temperature-to-humidity map:",
    "0 69 1",
    "1 0 69",
    "",
    "humidity-to-location map:",
    "60 56 37",
    "56 93 4"
  ]);
    expect(result).toEqual(
      [
        {type: "seed-to-soil", map: [
          { destination:50, source:98, length:2 }, 
          { destination:52, source:50, length:48 }]},
        {type: "soil-to-fertilizer", map: [
          { destination:0, source:15, length:37 }, 
          { destination:37, source:52, length:2 },
          { destination:39, source:0, length:15 }]},
        {type: "fertilizer-to-water", map: [
          { destination:49, source:53, length:8 }, 
          { destination:0, source:11, length:42 },
          { destination:42, source:0, length:7 }, 
          { destination:57, source:7, length:4 }]},
        {type: "water-to-light", map: [
          { destination:88, source:18, length:7 }, 
          { destination:18, source:25, length:70 }]},
        {type: "light-to-temperature", map: [
          { destination:45, source:77, length:23 }, 
          { destination:81, source:45, length:19}, 
          { destination:68, source:64, length:13 }]},
        {type: "temperature-to-humidity", map: [
          { destination:0, source:69, length:1 }, 
          { destination:1, source:0, length:69 }]},
        {type: "humidity-to-location", map: [
          { destination:60, source:56, length:37 }, 
          { destination:56, source:93, length:4 }]}                                            
      ] )
  })
})

describe("Get destination spot for seed", () => {
  test("Seed 79 will be placed in soil 81", () => {
    let result = day.GetDestinationSpot(79, {type: "seed-to-soil", map: [
      { destination:50, source:98, length:2 }, 
      { destination:52, source:50, length:48 }]});
    expect(result).toBe(81);
  }),
  test("soil 81 will be placed in fertilizer 81", () => {
      let result = day.GetDestinationSpot(81, {type: "soil-to-fertilizer", map: [
        { destination:0, source:15, length:37 }, 
        { destination:37, source:52, length:2 },
        { destination:39, source:0, length:15 }]});
      expect(result).toBe(81);
  }),
  test("fertilizer 81 will be placed in water 81", () => {
    let result = day.GetDestinationSpot(81, {type: "fertilizer-to-water", map: [
      { destination:49, source:53, length:8 }, 
      { destination:0, source:11, length:42 },
      { destination:42, source:0, length:7 }, 
      { destination:57, source:7, length:4 }]});
    expect(result).toBe(81);
  }),
  test("water 81 will be placed in light 74", () => {
    let result = day.GetDestinationSpot(81,  {type: "water-to-light", map: [
      { destination:88, source:18, length:7 }, 
      { destination:18, source:25, length:70 }]});
    expect(result).toBe(74);
  }),
  test("light 74 will be placed in temperature 78", () => {
    let result = day.GetDestinationSpot(74,  {type: "light-to-temperature", map: [
      { destination:45, source:77, length:23 }, 
      { destination:81, source:45, length:19}, 
      { destination:68, source:64, length:13 }]});
    expect(result).toBe(78);
  }),
  test("temperature 78 will be placed in humidity 78", () => {
    let result = day.GetDestinationSpot(78,  {type: "temperature-to-humidity", map: [
      { destination:0, source:69, length:1 }, 
      { destination:1, source:0, length:69 }]});
    expect(result).toBe(78);
  }),
  test("humidity 78 will be placed in location 82", () => {
    let result = day.GetDestinationSpot(78,  {type: "humidity-to-location", map: [
      { destination:60, source:56, length:37 }, 
      { destination:56, source:93, length:4 }]} );
    expect(result).toBe(82);
  })
  
})

describe("Get location for seed", () => {
  test("Seed 13 will return location 35", () => {
    let result = day.GetLocationForSeed(13,  [
      {type: "seed-to-soil", map: [
        { destination:50, source:98, length:2 }, 
        { destination:52, source:50, length:48 }]},
      {type: "soil-to-fertilizer", map: [
        { destination:0, source:15, length:37 }, 
        { destination:37, source:52, length:2 },
        { destination:39, source:0, length:15 }]},
      {type: "fertilizer-to-water", map: [
        { destination:49, source:53, length:8 }, 
        { destination:0, source:11, length:42 },
        { destination:42, source:0, length:7 }, 
        { destination:57, source:7, length:4 }]},
      {type: "water-to-light", map: [
        { destination:88, source:18, length:7 }, 
        { destination:18, source:25, length:70 }]},
      {type: "light-to-temperature", map: [
        { destination:45, source:77, length:23 }, 
        { destination:81, source:45, length:19}, 
        { destination:68, source:64, length:13 }]},
      {type: "temperature-to-humidity", map: [
        { destination:0, source:69, length:1 }, 
        { destination:1, source:0, length:69 }]},
      {type: "humidity-to-location", map: [
        { destination:60, source:56, length:37 }, 
        { destination:56, source:93, length:4 }]}                                            
    ]);
    expect(result).toBe(35);
  })
})