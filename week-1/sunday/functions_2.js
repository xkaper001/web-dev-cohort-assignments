// Write a function called `canVote` that returns true or false if the age of a user is > 18

function canVote(age) {
    return age > 18;
}

let minor = canVote(5)
let adult = canVote(19)

console.log(minor); // false
console.log(adult); // true