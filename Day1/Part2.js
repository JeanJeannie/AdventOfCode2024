import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2023/day/1

function Log(logLevel, message){
    if (logLevel == "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel != "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    return -1;
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

export function CombinationOfFirstAndLastNumbersInText(input) {
    var numbers = FirstAndLastNumbersInText(input);
    if (numbers.length === 0)
        return 0;

    if (numbers.length === 1)
        return (numbers[0] * 10) + numbers[0];

    if (numbers.length > 1)
        return (numbers[0] * 10) + numbers[1];
    
    return -1; // something wrong
}
