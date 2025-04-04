const express = require("express");
const { creatorModel, courseModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { creatorMiddleware } = require("../middleware/creator");

creatorRouter = express.Router();

// admin signup
creatorRouter.post("/signup", async (req, res) => {
    try {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
            name: z.string().max(30)
        })

        const parsedBody = requiredBody.safeParse(req.body);

        if (parsedBody.success) {
            const hashedPass = bcrypt.hashSync(parsedBody.data.password, 10);
            await creatorModel.create({
                email: parsedBody.data.email,
                password: hashedPass,
                name: parsedBody.data.name
            })
            console.log("Admin Account Created");
            res.status(201).json({
                message: "Account Created Successfully"
            });
        } else {
            res.status(401).json({
                message: parsedBody.error.message
            })

        }
    } catch (error) {
        console.log("Some Error Occured in Creator SingUp" + error);
        return res.status(401).json({
            message: error
        });
    }
});

// admin login
creatorRouter.post("/login", async (req, res) => {
    try {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        })


        const parsedBody = requiredBody.safeParse(req.body);

        if (parsedBody.success) {
            const creatorData = await creatorModel.findOne({
                email: parsedBody.data.email
            })

            const isVerified = bcrypt.compare(parsedBody.data.password, creatorData.password);
            if (isVerified) {
                const token = jwt.sign({
                    uid: creatorData._id
                }, process.env.JWT_CREATOR_SECRET);
                res.status(201).json({
                    message: "Logged In Successfully",
                    token: token
                });
                console.log("Creator Logged In");
            }
        } else {
            res.status(401).json({
                message: parsedBody.error.message
            });
        }
    } catch (error) {
        console.log("Some Error Occured in Creator Login" + error);
        return res.status(401).json({
            message: error
        });
    }
});

// Create a course
creatorRouter.post("/create", creatorMiddleware, async (req, res) => {
    const requestBody = z.object({
        title: z.string(),
        description: z.string().nullable(),
        price: z.number(),
        imageUrl: z.string().url(),
    });

    const parsedBody = requestBody.safeParse(req.body);

    if (parsedBody.success) {
        const course = await courseModel.create({
            title: parsedBody.data.title,
            description: parsedBody.data.description,
            price: parsedBody.data.price,
            imageUrl: parsedBody.data.imageUrl,
            creator: req.uid,
        });
        console.log(`Course ${course.id} Created`)
        res.status(201).json({
            message: "Course Created Successfully"
        });
    }
});

// Delete a course
creatorRouter.delete("/delete/:courseId", creatorMiddleware, async (req, res) => {
    const courseId = req.params.courseId;

    await courseModel.deleteOne({
        _id: courseId,
        creator: req.uid
    });
    console.log(`Course ${courseId} Deleted`);
    res.status(200).json({
        message: "Course Deleted Succssfully"
    });

});

// Update a course
creatorRouter.put("/:courseId", creatorMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const requestBody = z.object({
        title: z.string().nullable(),
        description: z.string().nullable(),
        price: z.number().nullable(),
        imageUrl: z.string().url().nullable(),
    });

    const parsedBody = requestBody.safeParse(req.body);

    const ress = await courseModel.updateOne({
        _id: courseId,
        creator: req.uid,
    }, {
        title: parsedBody.data.title,
        description: parsedBody.data.description,
        price: parsedBody.data.price,
        imageUrl: parsedBody.data.imageUrl,
    })
    if (ress.modifiedCount === 0) {
        return res.status(404).json({
            message: "Course Not Found"
        })
    }
    console.log(ress);
    console.log(`Course ${courseId} Updated`)
    res.status(200).json({
        message: "Course Updated Successfully"
    });
});

module.exports = {
    creatorRouter: creatorRouter
}