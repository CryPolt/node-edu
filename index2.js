const fs = require('fs');

// write json file

const obj = {
    "course": "node",
    "node": "code",
    "create": "method",
    "tags": ["fs","file","database"]
}

fs.writeFileSync('./test/json_file.json',JSON.stringify(obj), {
    encoding: 'utf8',
    flag: 'w'
})