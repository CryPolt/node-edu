const fs = require('fs');

// read json file

const data = fs.readFileSync('./test/example_2.json', {
    encoding: 'utf8'
});
console.log(typeof data);
let dataObj = JSON.parse(data);
console.log(dataObj);