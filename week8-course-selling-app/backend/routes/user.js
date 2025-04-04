const express = require("express")
const bcrypt = require("bcrypt");
const { userModel } = require("../db");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { userMiddleware } = require("../middleware/user");

userRouter = express.Router();

// user signup 
userRouter.post("/signup", async (req, res) => {
    try {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
            name: z.string().max(30)
        })

        const parsedBody = requiredBody.safeParse(req.body);

        if (parsedBody.success) {
            const hashedPass = bcrypt.hashSync(parsedBody.data.password, 10);
            await userModel.create({
                email: parsedBody.data.email,
                password: hashedPass,
                name: parsedBody.data.name
            })
            console.log("User Account Created");
            res.status(201).json({
                message: "Account Created Successfully"
            });
        } else {
            res.status(401).json({
                message: parsedBody.error.message
            });
        }
    } catch (error) {
        console.log("Some Error Occured in User SingUp" + error);
        return res.status(401).json({
            message: error
        });
    }
});

// user login
userRouter.post("/login", async (req, res) => {
    try {
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        })


        const parsedBody = requiredBody.safeParse(req.body);

        if (parsedBody.success) {
            const userData = await userModel.findOne({
                email: parsedBody.data.email
            })

            const isVerified = bcrypt.compare(parsedBody.data.password, userData.password);
            if (isVerified) {
                const token = jwt.sign({
                    userId: userData.id
                }, process.env.JWT_USER_SECRET);
                res.status(201).json({
                    message: "Logged In Successfully",
                    token: token
                });
                console.log("User Logged In");
            }
        } else {
            res.status(401).json({
                message: parsedBody.error.message
            });
        }
    } catch (error) {
        console.log("Some Error Occured in User Login" + error);
        return res.status(401).json({
            message: error
        });
    }
});

// see all purchased courses
userRouter.post("/purchases", userMiddleware, (req, res) => {
    res.status(200).send("OK");
});

module.exports = {
    userRouter: userRouter
}