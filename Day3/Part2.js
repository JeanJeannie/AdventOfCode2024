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

export function IsGearSymbol(input){
    return input === '*';
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

export function FindNextGearSymbolInRow(input, curPos){
    let gearPos = -1;
    let array = input.split('');
    
    for (let index = curPos; index < array.length; index++) {
        const element = array[index];
        if (IsGearSymbol(element)){
            gearPos = index;
            break;
        }        
    }

    if (gearPos == -1){
        return null;
    }

    return gearPos
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

export function FindPartNumbersNextToGear(array, gearRow, gearPos){
    let partNumbers = [];
    let numbersFound = []
    let startRow = gearRow == 0 ? gearRow : gearRow-1;
    let endRow = gearRow == array.length-1 ? gearRow : gearRow+1;

    for (let curRow = startRow; curRow <= endRow; curRow++) {
        const row = array[curRow];
        for (let curPos = 0; curPos < row.length; curPos++) {
            let numberFound = FindNextNumberInRow(row, curPos);
            if (numberFound != null){
                let isPart = IsNextToASymbol(array, curRow, numberFound.startPos, numberFound.endPos)
                if (isPart) {
                    numbersFound.push(numberFound);
                    //return numberFound;
                    // if start pos is greater than equal to 1 before gear pos 
                    // and end pos is less than or equal to 1 after gear pos
                    if (gearPos >= numberFound.startPos-1 && gearPos <= numberFound.endPos+1) 
                    {
                        partNumbers.push(numberFound.number);
                    }
                }
                curPos = numberFound.endPos;
            }
        }        
    }
    if (partNumbers.length > 0)
        return partNumbers;

    return null;
}

export function ReturnGearRatios(array){
    // read through array looking for gear 
    // then get gear parts
    // if only 2 of them then multiply together 
    let gearRatios = [];
    let gears = [];
    for (let index = 0; index < array.length; index++) {
        const curRow = array[index];
        for (let curPos = 0; curPos < curRow.length; curPos++) {
            let gear = FindNextGearSymbolInRow(curRow, curPos);
            if (gear != null){
                gears.push({gear: gear, row: index, pos: curPos})
                let partNumbers = FindPartNumbersNextToGear(array, index, gear);
                if (partNumbers != null && partNumbers.length == 2){
                    gearRatios.push(partNumbers[0] * partNumbers[1]);
                }
                curPos = gear;
            }
        }
    }

    if (gearRatios.length > 0)
        return gearRatios;

    return null;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    let gearRatios = ReturnGearRatios(arr);
    if (gearRatios == null){
        return -1;
    }
    return gearRatios.reduce((partialSum, a) => partialSum + a, 0);
}