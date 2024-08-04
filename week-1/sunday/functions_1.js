// Write a function sum that finds the sum of two numbers. 

function sum(a, b) {
    return (a + b)
}

console.log(sum(2,5));

// Side quest - Try passing in a string instead of a number and see what happens?

let sideQuestAnswer = sum(2+"two")
console.log(sideQuestAnswer);

// output: 2twoundefined

// happens because js compiler concatenates 2 (an int) into two (an String)