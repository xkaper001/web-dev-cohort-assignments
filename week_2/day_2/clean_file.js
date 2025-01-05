const fs = require('fs');

function cleanFile(fileName, encoding) {
    const contents = fs.readFileSync(fileName, encoding);
}

