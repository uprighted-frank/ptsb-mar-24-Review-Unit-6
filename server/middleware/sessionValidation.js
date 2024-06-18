const jwt = require("jsonwebtoken");
const Users = require("../models/user");

// Session Validation Middleware Functino
const sessionValidation = async (req, res, next) => {
    try {
        console.log(req.headers.authorization);

        // If no 'authorization' is being passed in our headers, throw an error
        if (!req.headers.authorization) throw new Error("Auth failed");

        const authToken = req.headers.authorization;

        // Using our token being passed from the client side into our header, verify its validity using the jwt token module
        const payload = authToken ? jwt.verify(authToken, process.env.SECRET_KEY) : undefined

        console.log("payload", payload);

        // Our payload has the id of the user. We can use that id to find our current user.
        const foundUser = await Users.findOne({ _id: payload._id });

        // If our user is found, then continue on with the rest of our route
        if (foundUser) {
            next();
        }

    } catch (err) {
        res.status(500).json({
            message: "Cannot validate"
        })
    }
}

module.exports = sessionValidation;