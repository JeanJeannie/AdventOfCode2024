import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2022/day/3

function Log(logLevel, message){
    if (logLevel == "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel != "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
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
    var numbers = ParseNumbers(input);

    if (numbers.length >= 1 && numbers.length <=2)
    {
        return numbers;
    }

    if (numbers.length > 2)
    {
        var first = numbers[0];
        var last = numbers[numbers.length-1];
        return [first, last];
    }

    return [];
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    return -1;
}