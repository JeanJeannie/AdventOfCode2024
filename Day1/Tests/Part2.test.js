const day = require('../Part2');

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

describe("similarity scores", () => {
  test("similarity score of 3 is 9", () => {
    let score = day.SimilarityScore(3, [4,3,5,3,9,3]);
    expect(score).toBe(9);
  }),
  test("overall score is 31", () => {
    let score = day.OverallScore(["3   4","4   3","2   5","1   3","3   9","3   3"]);
    expect(score).toBe(31);
  })
})
