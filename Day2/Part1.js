import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2023/day/2

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function GetGameNumber(input){
    let row = input.split(':');
    if (row.length > 0){
        if (row[0].includes("Game ")){
            let gameNo = row[0].replace("Game ", "");
            if (!isNaN(gameNo)){
                return parseInt(gameNo, 10);
            }
        }
    }
    return null;
}

export function GetGameSets(input){
    let row = input.split(": ");
    if (row.length > 0){
        return row[1].split("; ");
    }
    return null;
}

export function CountCubesInSetByColour(input, colour){
    let cubes = input.split(", ");
    let colourCubes = cubes.filter( (element) => element.includes(colour))

    let colourCubesCount = 0;
    colourCubes.forEach(element => {
        let count = element.split(" ")[0];
        colourCubesCount = colourCubesCount + parseInt(count, 10);
    });

    return colourCubesCount;
}

export function IsGameSetPossible(input){
    let redCubes = CountCubesInSetByColour(input, "red");
    if (redCubes > 12)
        return false;

    let greenCubes = CountCubesInSetByColour(input, "green");
    if (greenCubes > 13)
        return false;
    
    let blueCubes = CountCubesInSetByColour(input, "blue");
    if (blueCubes > 14)
        return false;

    return true;
}

export function ReturnGameNumberIfPossible(input){
    let gameNumber = GetGameNumber(input);
    let gameSets = GetGameSets(input);

    for (let index = 0; index < gameSets.length; index++) {
        const set = gameSets[index];
        if (!IsGameSetPossible(set))
            return 0;
    }
    return gameNumber;
}


export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var array = GetFileContentsAsArray(filename);
    let totalOfPossibleGameNumbers = 0;
    for (let index = 0; index < array.length; index++) {
        const row = array[index];
        totalOfPossibleGameNumbers = totalOfPossibleGameNumbers + ReturnGameNumberIfPossible(row);
    }
    return totalOfPossibleGameNumbers;
}