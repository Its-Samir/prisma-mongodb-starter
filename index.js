require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// default regular middlewares (add others like cors etc)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Hi");
});

app.listen(5000, console.log("running..."));
