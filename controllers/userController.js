const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
require("dotenv").config();

exports.loginUser = async (req, res) => {
    const password = req.body.password;
    const username = req.body.username;

    // Finding a user with a matching username
    const userFound = await User.findOne({ username: username });

    const hashedPasswordFromUser = userFound.password;

    bcrypt.compare(password, hashedPasswordFromUser, (err, result) => {
        if (result) {
            // Make JWT and send response
            const signedJWT = jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: 120 });
            res.status(201).json({ message: "Login successful", token: signedJWT })
        } else {
            res.status(403).json("Login failed!")
        }
    })
}

exports.registerUser = (req, res) => {
    const saltRounds = 10;
    const password = req.body.password;
    const username = req.body.username;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
        const newUser = new User({ username: username, password: hash });

        try {
            await newUser.save();
            res.status(201).json("User Registered!");
        } catch (err) {
            res.status(500).json("Couldn't register new User");
        }
    });
}