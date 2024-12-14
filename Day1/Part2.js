import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = true;

//https://adventofcode.com/2024/day/1

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
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

export function SimilarityScore(num, rightList){
    if (num == 0){
        return 0;
    }

    let occurenceInRightList = rightList.filter( element => element == num);
    return num * occurenceInRightList.length;
}

export function OverallScore(arr){
    let lists = SplitArray(arr);

    let overallScore = 0;

    for (let index = 0; index < lists.left.length; index++) {
        let leftNum = lists.left[index];
        overallScore = overallScore + SimilarityScore(leftNum, lists.right);        
    }    
    return overallScore;
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    //Log("INFO", arr);
    return OverallScore(arr);
}