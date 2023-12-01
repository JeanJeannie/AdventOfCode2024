import { GetResult } from "./Day1/Part2.js";
import * as url from 'url';
//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let day = "Day1";
let sampleFile = "SampleInputPart2.txt";
let puzzleInput = "Input.txt"
let inputfile = sampleFile;
let logOutput = false;

var filename = `${__dirname}/${day}/Input/${inputfile}`;
console.log(`${day} starting`)
console.log(`Answer = [${GetResult(filename, logOutput)}]`);