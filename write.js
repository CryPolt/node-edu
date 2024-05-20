const fs = require('fs');

const text = 'text text \r\n дароВа!';

// write to file

const pathToFile = './test/file_1.txt';
fs.writeFileSync(pathToFile, text, {
    encoding: 'utf8',
    flag: 'a',
});

//write file from array

const text2 = [
  'test',
  'test',
  'test'
];
fs.writeFileSync('./test/texttest.txt',text2.join('\r\n'), {
    encoding: 'utf8',
    flag: 'w',
});