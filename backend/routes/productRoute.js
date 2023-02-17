const express = require("express");
const productController= require('../controllers/productController')

const router = express.Router();
router.post('/createProduct',productController.createProduct);


// router.get("/prod",productController.getAll);



module.exports = router;