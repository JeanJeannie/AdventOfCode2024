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

    return { CardNumber: cardNumber, WinningNumbers: winningNumbers, LotteryNumbers: lotteryNumbers};
}

export function GetPointsWon(input) {
    let points = 0;
    let cardDetails = ReadLotteryCard(input);
    for (let index = 0; index < cardDetails.WinningNumbers.length; index++) {
        const winningNumber = cardDetails.WinningNumbers[index];
        if (cardDetails.LotteryNumbers.includes(winningNumber)){
            points = points == 0 ? 1 : points * 2;
        }
    }
    return points;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var array = GetFileContentsAsArray(filename);
    let winningPoints = 0;
    for (let index = 0; index < array.length; index++) {
        const card = array[index];
        Log("INFO", card);
        winningPoints = winningPoints + GetPointsWon(card);
    }
    return winningPoints;
}