// Write a function that takes an array of users as inputs 
// and returns only the users who are more than 18 years old

function checkAdults(users) {
    const adultUsers = []
    for (const user of users) {
        if (user.age > 18) {
            adultUsers.push(user)
        }
    } 
    return adultUsers;
}

users = [
    {
        name: "Ayan",
        age: 19,
    },
    {
        name: "Saksham",
        age: 20,
    },
    {
        name: "Abhyuday",
        age: 21,
    },
    {
        name: "Anish",
        age: 17,
    }
]

// calling function

const adults = checkAdults(users)
console.log(adults);
