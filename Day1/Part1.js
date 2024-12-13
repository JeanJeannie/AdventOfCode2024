import { GetFileContentsAsArray } from "../Helpers/ReadFile.js";
let DisplayLog = false;

//https://adventofcode.com/2024/day/1

function Log(logLevel, message){
    if (logLevel != "INFO") console.log(`[${logLevel}] ${message}`);
    if (logLevel == "INFO" && DisplayLog) console.log(`[${logLevel}] ${message}`);
    return;
}

export function SayHelloWorld() {
    return "Hello World!";
}

export function GetResult(filename, logOutput){
    DisplayLog = logOutput;
    var arr = GetFileContentsAsArray(filename);
    return -1;
}