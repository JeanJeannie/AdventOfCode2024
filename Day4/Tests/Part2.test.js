const day = require('../Part2');

describe("Read lottery card", () => {
  test("Returns Bonus Cards count of 4", () => {
    let result = day.ReadLotteryCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");
    expect(result).toBe(4);
  })
})

describe("Read through cards to get bonus cards", () => {
  test("it returns an array of cards with their bonus cards", () => {
    let result = day.ReadCardsForBonusCards(["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"]);
    //expect(result).toEqual([4,2,2,1,0,0])
    expect(result).toEqual([{BonusCards: 4, CardCount: 1},
      {BonusCards: 2, CardCount: 1}, 
      {BonusCards: 2, CardCount: 1}, 
      {BonusCards: 1, CardCount: 1}, 
      {BonusCards: 0, CardCount: 1}, 
      {BonusCards: 0, CardCount: 1}])
  })
})

describe("Read through cards to update card counts", () => {
  test("it returns an array of cards with their card count updated", () => {
    let result = day.UpdateCardCounts([{ BonusCards: 4, CardCount: 1},
      { BonusCards: 2, CardCount: 1},
      { BonusCards: 2, CardCount: 1},
      { BonusCards: 1, CardCount: 1},
      { BonusCards: 0, CardCount: 1},
      { BonusCards: 0, CardCount: 1}      
      ]);
    expect(result).toEqual([{ BonusCards: 4, CardCount: 1},
      { BonusCards: 2, CardCount: 2},
      { BonusCards: 2, CardCount: 4},
      { BonusCards: 1, CardCount: 8},
      { BonusCards: 0, CardCount: 14},
      { BonusCards: 0, CardCount: 1}      
      ])
  })
})

/** 
describe("Create card copies", () => {
  test("Card 1 had 4 winning numbers so creates a copy each of 2, 3, 4 & 5", () => {
    let result = day.CreateCardCopies(["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: A",
    "Card 3: B",
    "Card 4: C",
    "Card 5: D",
    "Card 6: E"]);
    expect(result).toEqual(["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: A",
    "Card 2: A",
    "Card 3: B",
    "Card 3: B",
    "Card 4: C",
    "Card 4: C",
    "Card 5: D",
    "Card 5: D",
    "Card 6: E"])
  })
})
*/
/**
 ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"]
 **/