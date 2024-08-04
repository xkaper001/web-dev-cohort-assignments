// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function checkMaleAdults(user) {
    if (user.age > 18 & user.gender == "male") {
        return user
    }
         
}
const users = [
    {
        name: "Ayan",
        age: 19,
        gender: "male",
    },
    {
        name: "Rohani",
        age: 20,
        gender: "female",
    },
    {
        name: "Anurag",
        age: 17,
        gender: "male",
    },
    
]


const maleAdults = users.filter(checkMaleAdults)

console.log(maleAdults);
