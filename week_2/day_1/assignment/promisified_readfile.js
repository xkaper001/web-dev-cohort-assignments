const fs = require("fs");

function fileOperations(err, data) {
    console.log("Opening File")
    console.log(data);
    console.log("File Closed");
}

fs.readFile('week_2/day_1/a.txt', "utf-8", fileOperations)

function readFilePromisifiedCallback(fileName, encoding, _, _) {
    const fh = fs.readFileSync(fileName, encoding);
    return fh;
}

// function promisified
function readFilePromisified(fileName, encoding) {
    return new Promise((resolve, reject) => readFilePromisifiedCallback(fileName, encoding, resolve, reject));
}

readFilePromisified('week_2/day_1/a.txt', 'utf-8')
    .then((value) => {w
        fileOperations(value);

    })
    .catch((err) => {
        console.error("Error reading files: ", err);
    });