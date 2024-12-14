import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = true;

//https://adventofcode.com/2024/day/1

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function SayHelloWorld() {
    return "Hello World!";
}

export function GetLeftList(arr){
    let left = arr;
    return left;
}

export function SplitArray(arr){
    let leftList = [];
    let rightList = [];
    arr.forEach(element => {
        let rowArr = element.split("   ");
        let leftNum = parseInt(rowArr[0]);
        let rightNum = parseInt(rowArr[1]);
        leftList.push(leftNum);
        rightList.push(rightNum);
    });
    return {left: leftList, right: rightList};
}

export function SortList(arr){
    return arr.sort();
}

export function PairDistance(leftNum, rightNum){
    return Math.abs(leftNum-rightNum);
}

export function DistanceSums(arr){
    let lists = SplitArray(arr);
    let leftSort = SortList(lists.left);
    let rightSort = SortList(lists.right);

    let distanceSum = 0;

    for (let index = 0; index < leftSort.length; index++) {
        let leftNum = leftSort[index];
        let rightNum = rightSort[index];
        distanceSum = distanceSum + PairDistance(leftNum, rightNum);        
    }    
    return distanceSum;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    //Log("INFO", arr);
    return DistanceSums(arr);
}