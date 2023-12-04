const day = require('../Part1');

describe("Read lottery card", () => {
  test("Returns 1 as the card number", () => {
    let result = day.ReadLotteryCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");
    expect(result.CardNumber).toBe(1);
  }),
  test("Returns winning numbers", () => {
    let result = day.ReadLotteryCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");
    expect(result.WinningNumbers).toEqual([41, 48, 83, 86, 17]);
  }),
  test("Returns lottery numbers", () => {
    let result = day.ReadLotteryCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");
    expect(result.LotteryNumbers).toEqual([83, 86, 6, 31, 17, 9, 48, 53]);
  })
})

describe("Get points won", () => {
  test("Returns 8 points as 4 winning numbers", () => {
    let result = day.GetPointsWon("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");
    expect(result).toBe(8);
  })
})
