// Assignment #2

// Write a function that takes a new object as input which has name, age  
// and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user = {
	name: "Ayan",
	age: 19,
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
    console.log("Hi " + salutation + " " + user.name + ", your age is " + user.age);    
}

greetUser(user)