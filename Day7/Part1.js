import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2022/day/3

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function IsNumber(input) {
    return !isNaN(input);
}

export function ConvertCards(input) {
    if (IsNumber(input)) {
        return parseInt(input, 10);
    }

    if (input == "T") 
        return 10;

    if (input == "J") 
        return 11;
    
    if (input == "Q") 
        return 12;
    
    if (input == "K") 
        return 13;
    
    if (input == "A") 
        return 14;
    
    return null;
}

function groupBy(array){
    return array.reduce( (acc, item) => {
        acc[item] = acc[item] || 0
        acc[item] += 1;
        return acc;
    }, {});
}

export function GetHand(input){
    return groupBy(input.split(''));
}

export function IsFiveOfAKind(input){
    return Object.values(GetHand(input)).some( (item) => item == 5);
}

export function IsFourOfAKind(input){
    return Object.values(GetHand(input)).some( (item) => item == 4);
}

export function IsThreeOfAKind(input){
    return Object.values(GetHand(input)).some( (item) => item == 3);
}

export function IsTwoOfAKind(input){
    return Object.values(GetHand(input)).some( (item) => item == 2);
}

export function IsTwoPair(input){
    let pairs = Object.values(GetHand(input)).filter( (x) => x == 2);
    return pairs;
}

export function IsFullHouse(input){
    return IsThreeOfAKind(input) && IsTwoOfAKind(input);
}


export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    return -1;
}