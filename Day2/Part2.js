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

export function GetMinimumCubes(input){
    let gamesets = GetGameSets(input);
    let maxBlueCubes = 0;
    let maxRedCubes = 0;
    let maxGreenCubes = 0;
    for (let index = 0; index < gamesets.length; index++) {
        const set = gamesets[index];
        let blueCount = CountCubesInSetByColour(set, "blue");
        let redCount = CountCubesInSetByColour(set, "red");
        let greenCount = CountCubesInSetByColour(set, "green");
        
        if (blueCount > maxBlueCubes)
            maxBlueCubes = blueCount;

        if (redCount > maxRedCubes)
            maxRedCubes = redCount;

        if (greenCount > maxGreenCubes)
            maxGreenCubes = greenCount;

    }
    return maxBlueCubes * maxRedCubes * maxGreenCubes;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var array = GetFileContentsAsArray(filename);
    let totalOfPossibleGameNumbers = 0;
    for (let index = 0; index < array.length; index++) {
        const row = array[index];
       // totalOfPossibleGameNumbers = totalOfPossibleGameNumbers + ReturnGameNumberIfPossible(row);
    }
    return totalOfPossibleGameNumbers;
}