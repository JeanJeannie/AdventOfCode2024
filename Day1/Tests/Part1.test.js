const day = require('../Part1');

describe("Get left & right lists", () => {
  test("it is an array of 6 items", () => {
    let arrays = day.SplitArray(["3   4","4   3","2   5","1   3","3   9","3   3"]);
    expect(arrays.left.length).toBe(6);
  }),
  test("the 3rd element in left array is 2", () => {
    let arrays = day.SplitArray(["3   4","4   3","2   5","1   3","3   9","3   3"]);
    expect(arrays.left[2]).toBe(2);
  }),
  test("the 3rd element in right array is 5", () => {
    let arrays = day.SplitArray(["3   4","4   3","2   5","1   3","3   9","3   3"]);
    expect(arrays.right[2]).toBe(5);
  })
}),

describe("sort arrays", () => {
  test("sorted left array first element is 1", () => {
    let array = day.SortList([3,4,2,1,3,3]);
    expect(array[0]).toBe(1);
  }),
  test("sorted right array first element is 3", () => {
    let array = day.SortList([4,3,5,3,9,3]);
    expect(array[0]).toBe(3);
  })
}),

describe("pair distances", () => {
  test("distance between 1 & 3 is 2",() => {
    let distance = day.PairDistance(1, 3);
    expect(distance).toBe(2);
  })
}),

describe("pair distance sums", () => {
  test("sum of pair distances is 11", () => {
    let sum = day.DistanceSums(["3   4","4   3","2   5","1   3","3   9","3   3"]);
    expect(sum).toBe(11);
  })
})