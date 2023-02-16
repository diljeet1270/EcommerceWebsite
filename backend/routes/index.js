const express = require("express")
const router=express.Router();
const productRoute = require('./productRoute');
router.use("/productRoute", productRoute);
module.exports = router;
