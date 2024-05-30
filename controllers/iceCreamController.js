const IceCream = require("../models/icecream");
require("dotenv").config();

exports.getAllIceCream = async (req, res) => {
    try {
        const iceCreams = await IceCream.find({});

        res.status(200).json(iceCreams);
    } catch (err) {
        res.status(500).json("Couldn't get ice creams");
    }
};

exports.getIceCreamById = async (req, res) => {
    try {
        const foundIceCream = await IceCream.findOne({ _id: req.params.id });

        console.log(foundIceCream);

        if (!foundIceCream) {
            res.status(404).json("Ice cream not found");
            return;
        }

        res.status(200).json(foundIceCream);
    } catch (err) {
        res.status(500).json("Couldn't get ice cream");
    }
};

exports.addIceCream = async (req, res) => {
    try {
        const newIceCream = new IceCream({
            flavor: req.body.flavor,
            softServe: req.body.softServer,
            manufacturer: req.body.manufacturer,
            scoopQuantity: req.body.scoopQuantity
        });

        await newIceCream.save();

        res.status(201).json(newIceCream);
    } catch (err) {
        res.status(500).json("Couldn't add ice cream");
    }
};

exports.updateIceCream = async (req, res) => {
    try {

        const replacingIceCream = new IceCream({
            _id: req.params.id,
            flavor: req.body.flavor,
            softServe: req.body.softServer,
            manufacturer: req.body.manufacturer,
            scoopQuantity: req.body.scoopQuantity
        })

        await IceCream.findOneAndUpdate({ _id: req.params.id}, replacingIceCream);

        res.status(200).json(replacingIceCream);
    } catch (err) {
        res.status(500).json("Couldn't update ice cream")
    }
};

exports.deleteIceCream = async (req, res) => {
    try {
        await IceCream.findByIdAndDelete(req.params.id);

        res.status(200).json("Ice cream removed")
    } catch (err) {
        res.status(500).json("Ice cream could not be removed")
    }
};