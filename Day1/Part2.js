import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2023/day/1

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function IsNumber(input) {
    return !isNaN(input);
}

const textToNumber = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0
    }

export function LiteralNumbers() {
    let keys = Object.keys(textToNumber);
    return keys;
} 

export function LiteralNumbersAsArray() {
    return LiteralNumbers().map( (element) => element.split(''));
}

export function LastLetterOfLiteralNumbers() {
    return LiteralNumbersAsArray().map( (element) => { 
        return element[element.length-1];
    });
}

export function FirstLetterOfLiteralNumbers() {
    return LiteralNumbersAsArray().map( (element) => { 
        return element[0];
    });
}

export function FindPotentialLiterals(input) {
    return LiteralNumbers().filter( (element) => element.split('')[0] === input);
}

export function CheckAheadIfLiteralNumber(input) {
// read each char.  If it's a number return it, if it's the first character of a literal number
// check to see if the following characters match.  
    let array = input.split('');
    for (let index = 0; index < array.length; index++) { 
        let curChar = array[index];
        if (IsNumber(curChar)) {
            return parseInt(curChar, 10);
        }
        let potentialLiteral = FirstLetterOfLiteralNumbers().findIndex((el) => el === curChar);
        if (potentialLiteral >= 0){
            return potentialLiteral;
        }
    }
}

export function FindFirstMatchingNumber(input){
    let array = input.split('');
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (IsNumber(element)) {
            return parseInt(element, 10);
        }

        let remainingArray = array;
        if (index !== 0){
            remainingArray = array.slice(index);
        }
        let matchingLiteral = FindMatchingLiteral(remainingArray);
        if (matchingLiteral != null)
        {
            return matchingLiteral;
        }        
    }
    return null;
}


export function FindMatchingLiteral(input){
//    let inputArray = input.split('');
    let potentialLiteral = FindPotentialLiterals(input[0]);
   // return potentialLiteral;
    var inputNumber = null;

    for (let index = 0; index < potentialLiteral.length; index++) {
        let element = potentialLiteral[index];
        let lenElement = element.length;
        let potentialInput = input.slice(0, lenElement).join('');
        if (element == potentialInput){
            inputNumber = textToNumber[potentialInput];
            break;
        }        
    }
    
    return inputNumber;
}

export function ParseTextAsNumber(input){
    var num = textToNumber[input];
    return num ?? null;
}

export function ParseNumbers(input) {
    var chars = input.split('');
    var numbers = chars.filter(IsNumber)
    return numbers.map( char => parseInt(char, 10));
}

export function FirstAndLastNumbersInText(input) {
    var firstNumber = FindFirstNumber(input);
    if (firstNumber === null){
        return [];
    }
    var lastNumber = FindLastNumber(input);
    if (lastNumber === null){  // shouldn't be possible as the firstNumber variable would also be null
        return [-1];  
    }
    return [firstNumber, lastNumber];
}

export function CombinationOfFirstAndLastNumbersInText(input) {
    var numbers = FirstAndLastNumbersInText(input);
    if (numbers.length === 0)
        return 0;

    if (numbers.length === 1) // shouldn't happen as first number gets counted as last number
        return (numbers[0] * 10) + numbers[0];

    if (numbers.length > 1)
        return (numbers[0] * 10) + numbers[1];
    
    return -1; // something wrong
}

export function FindLastNumber(input){
    let array = input.split('');
    for (let index = array.length; index >= 0; index--) {
        const element = array[index];
        if (!isNaN(element))
            return parseInt(element, 10);        
    }
    return null;
}

export function FindFirstNumber(input){
    let array = input.split('');
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!isNaN(element))
            return parseInt(element, 10);        
    }
    return null;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var array = GetFileContentsAsArray(filename);
    var total = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        var numberFromRow = CombinationOfFirstAndLastNumbersInText(element);
        Log("INFO", numberFromRow);
        total = total + numberFromRow;
    }
    return total;
}