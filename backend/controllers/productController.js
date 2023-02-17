const Product = require("../models/productmodel");
const express = require("express")
const app = express();

// Create Product -- Admin
const createProduct = async (req,res)=>{
try {
    console.log("The body", req.body);
  

    let product = new Product(req.body);
    let doc = await product.save();
    return res.status(200).json(doc);
  } catch (error) {
    console.log("The error while creating product", error);
    return res.status(403).json(error);
  }
};


//Get all product





module.exports = {
    createProduct
}
