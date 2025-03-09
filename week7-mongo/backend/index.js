const express = require("express")
const mongoose = require("mongoose");
const { TodoModel, UserModel } = require("./db")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "my_secret";
const bcrypt = require("bcrypt");
const { z } = require("zod")

const app = express()
mongoose.connect("mongodb+srv://imluckyayan:1l0vemak1ma@test.xsmaf10.mongodb.net/todo-app")

app.use(express.json())

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.uid = decodedData.id
        next();
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

}

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const requiredBody = z.object({
        email: z.string({
            required_error: "Email is requried.",
            invalid_type_error: "Invalid Email."
        }).email(),
        password: z.string({
            invalid_type_error: "Invalid Password"
        }).min(6, {
            message: "Minimum 6 characters required."
        }),
    })

    const parsedBody = requiredBody.safeParse(req.body);

    if (!parsedBody.success) {
        return res.status(401).json({
            message: "Incorrect Format",
            error: parsedBody.error
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await UserModel.create({
            email: email,
            hashedPassword: hashedPassword,
            name: name
        })

        res.status(201).json({
            message: "Account Created"
        })
    } catch (error) {
        res.status(400).json({
            error: "Account already exists."
        })
    }
    console.log("User Created Successfully");
})
app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    })

    if (!user) {
        return res.status(404).json({
            message: "User Doesn't Exist."
        })
    }

    const isPassMatched = await bcrypt.compare(password, user.hashedPassword)

    if (isPassMatched) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        });
        console.log(`User ${user._id} created successfully`);

    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }
})
app.post("/todo", auth, async function (req, res) {
    const resss = await TodoModel.create({
        title: req.body.title,
        done: req.body.done,
        userId: req.uid
    })
    console.log(resss.toJSON());
    res.status(201).json({
        message: "Todo Created Successfully"
    })
})
app.get("/todo", auth, async function (req, res) {
    const todos = await TodoModel.find({
        userId: req.uid
    });
    res.status(200).json(todos);
})

app.listen((4000));