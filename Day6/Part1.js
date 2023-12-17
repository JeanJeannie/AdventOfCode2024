import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2022/day/3

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function DistanceTravelled(totalTime, heldTime) {
    return (totalTime - heldTime) * heldTime;
}

export function GetDistanceTravelled(totalTime) {
    let distancesTravelled = [];
    for (let heldTime = 0; heldTime <= totalTime; heldTime++) {
        distancesTravelled.push( DistanceTravelled(totalTime, heldTime));
    }
    return distancesTravelled;
}

export function WaysToWin(totalTime, winningDistance) {
    let distancesTravelled = GetDistanceTravelled(totalTime);
    let waysToWin = distancesTravelled.filter( (item) => item > winningDistance);
    return waysToWin.length;
}

export function GetNumbers(input){
    return input.split(":")[1].split(' ').filter( (item) => item != "").map( item => parseInt(item, 10));
}

export function GetTimingsAndDistances(array){
    let timings = GetNumbers(array[0]);
    let distances = GetNumbers(array[1]);

    if (timings.length != distances.length)
        return null;

    let result = [];

    for (let index = 0; index < timings.length; index++) {
        result.push({time: timings[index], distance: distances[index]});        
    }
    return result;
}

export function GetWaysToWin(array){
    let waysToWin = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        waysToWin.push(WaysToWin(element.time, element.distance));
    }
    return waysToWin;
}

export function GetScore(array){
    return array.reduce((partialSum, a) => partialSum * a, 1);
} 

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);

    let timingsAndDistances = GetTimingsAndDistances(arr);
    let waysToWin = GetWaysToWin(timingsAndDistances);
    let score = GetScore(waysToWin);
    return score;
}