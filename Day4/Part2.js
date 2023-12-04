import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2023/day/4

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function ReadLotteryCard(input) {
    //Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
    let cardNumber = -1;
    let winningNumbers = [];
    let lotteryNumbers = [];
    let card = input.replaceAll("  "," ").split(": ");
    if (card[0].includes("Card ")){
        cardNumber = parseInt(card[0].replace("Card ", ""), 10);
    }

    let cardDetails = card[1].split(" | ");

    winningNumbers = cardDetails[0].split(" ").map( (element) => parseInt(element, 10));
    lotteryNumbers = cardDetails[1].split(" ").map( (element) => parseInt(element, 10));

    let bonusCards = 0;
    for (let index = 0; index < winningNumbers.length; index++) {
        const winningNumber = winningNumbers[index];
        if (lotteryNumbers.includes(winningNumber)){
            bonusCards = bonusCards + 1;
        }
    }

    return bonusCards;
}

export function ReadCardsForBonusCards(array){
    return array.map((element) => ({BonusCards: ReadLotteryCard(element), CardCount: 1}));
}

export function UpdateCardCounts(array){

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //return element.BonusCards;
        if (element.BonusCards > 0){
            for (let updatePos = index + 1; updatePos <= index + element.BonusCards; updatePos++) {
                let origCardCount = array[updatePos].CardCount;
                //return array[updatePos];
                array[updatePos].CardCount = origCardCount + element.CardCount;
            }
        }
    }
    return array;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var array = GetFileContentsAsArray(filename);
    const cardDetails = ReadCardsForBonusCards(array);
    let updatedCards = UpdateCardCounts(cardDetails);
    let cardCount = 0;
    for (let index = 0; index < updatedCards.length; index++) {
        const element = updatedCards[index];
        cardCount = cardCount + element.CardCount;
    }
    return cardCount;
};