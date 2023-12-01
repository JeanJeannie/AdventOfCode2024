import {readFileSync, promises as fsPromises} from 'fs';

export function GetFileContentsAsArray(filename){
    console.log(`[INFO] - GetFileContentsAsArray [${filename}]`)
    let contents = readFileSync(filename, {encoding: 'utf8'}) ;
    return contents.split('\n');
}

export function GetFileContentsAsArrayCRLF(filename){
    let contents = readFileSync(filename, {encoding: 'utf8'}) ;
    return contents.split('\r\n');
}
