// Assignment #2

// Write a function that takes a new object as input which has name, age  
// and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user = {
	name: "Ayan",
	age: 18,
	gender: "male"
}


function greetUser(user) {
	if (user.gender == "male") {
		salutation = "Mr."
	} else if (user.gender == "female") {
		salutation = "Mrs."
	} else {
		salutation = ""
	}
	if (user.age > 18) {
		canVote = "are"
	} else {
		canVote = "are not"
	}
    console.log("Hi " + salutation + " " + user.name + ", your age is " + user.age + " and you " + canVote + " eligible to vote.");    
}

greetUser(user)