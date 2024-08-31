const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/user");


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).send(newUser);
    } else {
        res.status(400).send({ message: "User already exists" });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (isPasswordValid) {
            res.status(200).send({ message: "Login successful" });
        } else {
            res.status(401).send({ message: "Invalid password" });
        }
    } else {
        res.status(400).send({ message: "Incorrect login details" });
    }
});

module.exports = router;
