const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
require("dotenv").config();

// This route will login a user
exports.loginUser = async (req, res) => {
    const password = req.body.password;
    const username = req.body.username;

    // Finding a user with a matching username
    const userFound = await User.findOne({ username: username });

    const hashedPasswordFromUser = userFound.password;

    // Payload consists of password, username and _id
    const payload = {
        password: req.body.password,
        username: req.body.username,
        _id: userFound.id
    }

    bcrypt.compare(password, hashedPasswordFromUser, (err, result) => {
        if (result) {
            // Make JWT and send response
            const signedJWT = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 120 });
            res.status(201).json({ message: "Login successful", token: signedJWT, loggedIn: true, username: username })
        } else {
            res.status(403).json({ message: "Login failed", loggedIn: false })
        }
    })
}

// This route will register a user
exports.registerUser = (req, res) => {
    const saltRounds = 10;
    // Gather password and username from req.body
    const password = req.body.password;
    const username = req.body.username;

    // Using bcrypt, hash the password.
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        // Create user in db using username and hashed password
        const newUser = new User({ username: username, password: hash });

        try {
            // Save user to db
            await newUser.save();
            res.status(201).json("User Registered!");
        } catch (err) {
            res.status(500).json("Couldn't register new User");
        }
    });
}