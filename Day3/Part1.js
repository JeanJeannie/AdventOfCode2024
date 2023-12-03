import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2023/day/3

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function IsNumber(input){ 
    return !isNaN(input);
}

export function IsSymbol(input){
    return isNaN(input) && input !== '.';
}

export function FindNextNumberInRow(input, curPos){
    let startPos = -1;
    let endPos = -1;
    let array = input.split('');
    let numberString = "";
    let ignoredString = "";

    for (let index = curPos; index < array.length; index++) {
        const element = array[index];
        if (IsNumber(element)){
            if (startPos == -1){
                startPos = index; // store start position
                numberString = element;
            }
            else {
                numberString += element;
            }
            endPos = index;
        }
        else { // must be symbol or period
            ignoredString += element;
            if (startPos != -1) { // we've hit the end of the number
                break;
            }
        }        
    }

    if (numberString == ""){
        return null;
    }

    return { number: parseInt(numberString, 10), startPos: startPos, endPos: endPos}
}

export function IsNextToASymbol(array, row, startPos, endPos){
    // check to the left
    if (startPos != 0){
        let leftChar = array[row].split('')[startPos-1];
        if (IsSymbol(leftChar)){
            return true;
        };
    }
    // check to the right
    if (endPos != array[row].length-1){
        let rightChar = array[row].split('')[endPos+1];
        if (IsSymbol(rightChar)) 
            return true;
    }

    // check above
    if (row != 0){
        let startP = startPos !== 0 ? startPos-1 : startPos;
        let endP = endPos != array[row-1].length-1 ? endPos+1 : endPos;

        for (let index = startP; index <= endP; index++) {
            let aboveChar = array[row-1].split('')[index];
            if (IsSymbol(aboveChar)){
                return true;
            }
        }
    }

    // check below
    if (row != array.length-1){
        let startP = startPos !== 0 ? startPos-1 : startPos;
        let endP = endPos != array[row+1].length-1 ? endPos+1 : endPos;

        for (let index = startP; index <= endP; index++) {
            let belowChar = array[row+1].split('')[index];
            if (IsSymbol(belowChar)){
                return true;
            }
        }
    }

    return false;
}

export function ReturnPartNumbers(array){
    let partNumbers = [];
    for (let curRow = 0; curRow < array.length; curRow++) {
        const row = array[curRow];
        for (let curPos = 0; curPos < row.length; curPos++) {
            let numberFound = FindNextNumberInRow(row, curPos);
            if (numberFound != null){
                let isPart = IsNextToASymbol(array, curRow, numberFound.startPos, numberFound.endPos)
                if (isPart) 
                    partNumbers.push(numberFound.number);
                curPos = numberFound.endPos; // move for loop 
            }                        
        }        
    }

    if (partNumbers.length > 0)
        return partNumbers;

    return null;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    let partNumbers = ReturnPartNumbers(arr);
    if (partNumbers == null){
        return -1;
    }
    return partNumbers.reduce((partialSum, a) => partialSum + a, 0);
}