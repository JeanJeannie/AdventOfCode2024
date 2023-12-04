import { GetResult } from "./Day4/Part2.js";
import * as url from 'url';
//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let day = "Day4";
let sampleFile = "SampleInput.txt";
let puzzleInput = "Input.txt"
let inputfile = sampleFile;
let logOutput = true;

var filename = `${__dirname}/${day}/Input/${inputfile}`;
console.log(`${day} starting`)
console.log(`Answer = [${GetResult(filename, logOutput)}]`);