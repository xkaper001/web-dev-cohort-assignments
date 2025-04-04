const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true},
    password: String
})

const creatorSchema = new Schema({
    name: String,
    email: { type: String, unique: true},
    password: String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creator: ObjectId

})

const purchaseSchema = new Schema({
    course: ObjectId,
    user: ObjectId,
})

const userModel = mongoose.model("users", userSchema);
const creatorModel = mongoose.model("creators", creatorSchema);
const courseModel = mongoose.model("courses", courseSchema);
const purchaseModel = mongoose.model("purchases", purchaseSchema);

module.exports = {
    userModel: userModel,
    creatorModel: creatorModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel,    
}