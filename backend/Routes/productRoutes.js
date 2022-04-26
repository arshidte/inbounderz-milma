import express from 'express';
import { createProduct, deleteProduct, getProducts, getProductsByCategory, getProductsById, updateProduct } from '../controllers/productControl.js';
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);

router
  .route("/:id")
  .get(getProductsById)
  .delete(deleteProduct)
  .put(updateProduct);

router.get('/category/:category', getProductsByCategory);

export default router;