import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2023/day/5

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function ReadSeeds(input) {
    if (input.includes("seeds: ")){
        return input.replace("seeds: ", "").split(" ").map( (element) => parseInt(element, 10));
    }
    return null;
}

export function ReadMapping(input){
    let source = [];
    let destination = [];

    let mapping = input.split(" ").map( (element) => parseInt(element, 10));
    let sourceStart = mapping[0];
    let destinationStart = mapping[1];
    let length = mapping[2];

    for (let index = 0; index < length; index++) {
        
        source.push(sourceStart + index);
        destination.push(destinationStart + index);
    }
    return { source: source, destination: destination}
}

export function ReadMappingFile(array){
    

}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    return -1;
}