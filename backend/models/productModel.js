import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
      type: Number,
      requred: true,
  }
});

const Product = mongoose.model('Product', productSchema)

export default Product