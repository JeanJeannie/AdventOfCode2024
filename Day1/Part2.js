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