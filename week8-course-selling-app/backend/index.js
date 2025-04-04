const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/user");
const { creatorRouter } = require("./routes/creator");
const { courseRouter } = require("./routes/course");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/creator", creatorRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  await mongoose.connect(process.env.MY_MONGOOSE_STRING)
  app.listen(4444, () => {
    console.log("Server is running on port 4444");
  });
}

main();