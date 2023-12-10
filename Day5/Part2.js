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

/** 
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
**/ 

export function ReadMapping(array, startPos){
    startPos = startPos == undefined ? 0 : startPos;
    let type = "";
    let map = [];
    let lastPos = startPos;
    for (let index = startPos; index < array.length; index++) {
        lastPos = index;
        const element = array[index];
        if (element == "") {
            break;
        }

        let rowContents = element.split(' ');
        if (rowContents[1] == "map:"){
            type = rowContents[0];
            continue;
        }
        let formattedRow = rowContents.map( item => parseInt(item, 10));
        map.push( { destination: formattedRow[0] , source: formattedRow[1], length: formattedRow[2]});
    }
    return { result: { type: type, map: map }, lastPos: lastPos};
}

export function ReadAllMappings(array){
    let mappings = [];
    for (let index = 0; index < array.length; index++) {
        let currentMapping = ReadMapping(array, index);
        mappings.push(currentMapping.result);
        index = currentMapping.lastPos;
        if (currentMapping.type == "humidity-to-location"){
            break;
        }
    }
    return mappings;
}

export function GetDestinationSpot(seed, mapping){
    for (let index = 0; index < mapping.map.length; index++) {
        const currentMapping = mapping.map[index];
        if (seed >= currentMapping.source 
            && seed < currentMapping.source + currentMapping.length){
                let diff = currentMapping.destination - currentMapping.source;
                return seed + diff;
        }
    }
    return seed;
}

export function GetLocationForSeed(seed, allMappings){
    let destination = seed;
    for (let index = 0; index < allMappings.length; index++) {
        const currentMapping = allMappings[index];
        destination = GetDestinationSpot(destination, currentMapping);
    }
    return destination;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    let seeds = ReadSeeds(arr.shift());
    let allMappings = ReadAllMappings(arr);
    let locations = [];
    let lowestLocation = null;
    for (let index = 0; index < seeds.length; index++) {
        let currentLocation = GetLocationForSeed( seeds[index], allMappings);
        locations.push(currentLocation);
        if (lowestLocation == null || currentLocation < lowestLocation){
            lowestLocation = currentLocation;
        }        
    }

    return lowestLocation;
}