const day = require('../Part1');

describe("Time and distance", () => {
  test("Total time of 7ms when held for 0ms travels 0mm", () => {
    let result = day.DistanceTravelled(7, 0);
    expect(result).toBe(0);
  }),
  test("Total time of 7ms when held for 1ms travels 6mm", () => {
    let result = day.DistanceTravelled(7, 1);
    expect(result).toBe(6);
  }),
  test("Total time of 7ms when held for 2ms travels 10mm", () => {
    let result = day.DistanceTravelled(7, 2);
    expect(result).toBe(10);
  }),
  test("Total time of 7ms when held for 3ms travels 12mm", () => {
    let result = day.DistanceTravelled(7, 3);
    expect(result).toBe(12);
  }),
  test("Total time of 7ms when held for 4ms travels 12mm", () => {
    let result = day.DistanceTravelled(7, 4);
    expect(result).toBe(12);
  }),
  test("Total time of 7ms when held for 5ms travels 10mm", () => {
    let result = day.DistanceTravelled(7, 5);
    expect(result).toBe(10);
  }), 
  test("Total time of 7ms when held for 6ms travels 6mm", () => {
    let result = day.DistanceTravelled(7, 6);
    expect(result).toBe(6);
  }),
  test("Total time of 7ms when held for 7ms travels 0mm", () => {
    let result = day.DistanceTravelled(7, 7);
    expect(result).toBe(0);
  })
})

describe("Get all distances travelled", () => {
  test("When total time is 7ms the distances travelled are 0, 6, 10, 12, 12, 10, 6, 0", () => {
    let result = day.GetDistanceTravelled(7);
    expect(result).toEqual([0, 6, 10, 12, 12, 10, 6, 0]);
  })
})

describe("Number of ways of winning", () => {
  test("4 ways of winning when total time of 7ms distance to beat 9mm", () => {
    let result = day.WaysToWin(7, 9);
    expect(result).toBe(4); 
  }),
  test("8 ways of winning when total time of 15ms distance to beat 40mm", () => {
    let result = day.WaysToWin(15, 40);
    expect(result).toBe(8); 
  }),
  test("9 ways of winning when total time of 30ms distance to beat 200mm", () => {
    let result = day.WaysToWin(30, 200);
    expect(result).toBe(9); 
  })
})

describe("Get Timings", () => {
  test("Reads in timings and returns as an array of numbers", () => {
    let result = day.GetNumbers("Time:      7  15   30");
    expect(result).toEqual([7, 15, 30]);
  })
})

describe("Get Timings & Distances", () => {
  test("Reads in array and returns array of objects", () => {
    let result = day.GetTimingsAndDistances(["Time:      7  15   30", "Distance:  9  40  200"]);
    expect(result).toEqual([{time:7, distance:9}, {time:15, distance:40}, {time:30, distance:200}]);
  })
})

describe("Get ways to win", () => {
  test("it returns [4, 8, 9]", () => {
    let result = day.GetWaysToWin([{time:7, distance:9}, {time:15, distance:40}, {time:30, distance:200}]);
    expect(result).toEqual([4, 8, 9]);
  })
})

describe("Get Score from ways to win", () => {
  test("Returns 288", () => {
    let result = day.GetScore([4, 8, 9]);
    expect(result).toBe(288);
  })
})