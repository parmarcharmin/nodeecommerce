const express = require("express");
const Product = require("../Schemas/Products");
const SlugGenerate = require("../myFunction/SlugGenerate");
const product = express.Router();

product.get("/product/:productcat/:productType?", async (req, res) => {
  let name = req.params.productcat;
  let type = req.params.productType;
  let products;
  if (type == undefined) {
    products = await Product.find({ productCategory: name });
  } else {
    products = await Product.find({ productCategory: name, productType: type });
  }

  res.json(products);
});
product.post("/product/add", async (req, res) => {
  let response = {};
  let product = new Product();
  product.productCategoryID = req.body.productCategoryID;
  product.productCategory = req.body.productCategory;
  product.productName = req.body.productName;
  product.productDescription = req.body.productDescription;
  product.productPrice = req.body.productPrice;
  product.productImage = req.body.productImage;
  let preProduct = await Product.find({ productName: req.body.productName });

  let allpreProduct = preProduct.map((item) => item.productName);
  let productSlug = SlugGenerate(req.body.productName, allpreProduct);
  product.productSlug = productSlug;
  await product.save();
  if (product) {
    response.successfull = true;
  } else {
    response.failed = true;
  }
  return res.json(response);
});

product.get("/products/:productCategory", async (req, res) => {
  let productCategory = req.params.productCategory;
  let Products = await Product.find({ productCategory: productCategory });
  res.json(Products);
});


product.get("/productSlug/:slug", async(req,res)=>{
  let productSlug = req.params.slug;
  let Products = await Product.find({ productSlug: productSlug });
  res.json(Products);
})
module.exports = product;
