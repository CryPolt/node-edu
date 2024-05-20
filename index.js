const fs = require('fs');
const path = require('path');


// Check dir fs.existSync()
function f01() {
    const pathToDir = './test';
    if(fs.existsSync(pathToDir)){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}
// f01();

// Check file

function f02() {
    const pathToFile = './test/file.txt';
    if(fs.existsSync(pathToFile)){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}
// f02();

// size file

function f03() {
    const pathToFile = './test/file.txt';
    const fileinfo = fs.statSync(pathToFile);
    console.log(fileinfo.isFile())
}
// f03();

// name and ext file

function f04() {
    const pathToFile = './test/file.txt';
    console.log(path.basename(pathToFile));
    console.log(path.dirname(pathToFile));
    console.log(path.extname(pathToFile));
    console.log(path.parse(pathToFile));
}
// f04();

// get all files/folders in dir

function f05() {
    const pathToDir = './test';
    const allFiles = fs.readdirSync(pathToDir);
    console.log(allFiles);
    let out = '';
    allFiles.forEach(item => out += item +'\n');
    console.log(out);
}
//f05()

// get abs route

const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath);
console.log(__dirname);

