// Write a function that takes an array of numbers as input, and 
// returns a new array with only even values. Read about filter in JS

function checkEven(num) {
    if (num % 2 == 0) {
        return num
    }
}

const nos = [2,23,4,35,65,78]

const even_nos = nos.filter(checkEven) 
console.log(even_nos);
