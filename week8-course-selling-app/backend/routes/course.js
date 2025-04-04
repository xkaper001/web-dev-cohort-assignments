const express = require("express");
const { courseModel ,purchaseModel} = require("../db");


courseRouter = express.Router();

// purchase a course
courseRouter.post("/purchase/:courseId", (req, res) => {
    const courseId = req.params.
    res.status(200);
});

// see all
courseRouter.post("/preview", (req, res) => {
    res.status(200);
});

courseRouter.post("/all", async (req, res) => {
    try {
        const courses = await courseModel.find();
        res.status(200).json(courses);
    } catch (error) {
        console.log(error);
        res.send(400).json({
            error: error.message
        });
    }
})

module.exports = {
    courseRouter: courseRouter
}