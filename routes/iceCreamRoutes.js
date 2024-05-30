const express = require("express");
const router = express.Router();
// Import controller
const iceCreamController = require("../controllers/iceCreamController");

// GET all ice creams
router.get("/", iceCreamController.getAllIceCream)

// GET ice cream by id
router.get("/:id", iceCreamController.getIceCreamById)

// POST Add new ice cream
router.post("/", iceCreamController.addIceCream);

// PUT Update ice cream
router.put("/:id", iceCreamController.updateIceCream);

// DELETE Remove ice cream
router.delete("/:id", iceCreamController.deleteIceCream);

module.exports = router;