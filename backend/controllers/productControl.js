import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    image: "images/sample.jpg",
    quantity: "0 ml",
    category: "sample category",
    price: 0,
  });
  const createdProduct = await product.save();
  if (createdProduct) {
      res.status(201).json(createdProduct);
  }
});

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Products not found!");
  }
});

const getProductsByCategory = asyncHandler(async(req,res)=>{
    const products = await Product.find({category: req.params.category});
    if(products){
        res.status(201).json(products);
    } else {
      res.status(404);
      throw new Error("Product not found!");
    }
})

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found!");
  }
});

const updateProduct = asyncHandler(async(req,res)=>{
    const { name, image, quantity, category, price } = req.body;
    
    const product = await Product.findById(req.params.id);

    if(product){
        product.name = name,
        product.image = image,
        product.quantity = quantity,
        product.category = category,
        product.price = price

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } else {
      res.status(401);
      throw new Error("Product not found");
    }

})

const deleteProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        await product.remove();
        res.status(200).json({message : "Product removed"})
    } else {
      res.status(404);
      throw new Error("Product not found!");
    }
})

export {
    createProduct,
    getProducts,
    getProductsByCategory,
    getProductsById,
    updateProduct,
    deleteProduct
}