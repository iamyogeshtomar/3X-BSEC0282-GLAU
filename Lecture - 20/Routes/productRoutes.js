const express = require(`express`);
const router = express.Router();

const {
  showAllProducts,
  showSingleProduct,
  showNewProductForm,
  addNewProduct,
  productEditForm,
  updateOldProduct,
  deleteProduct,
} = require(`../Controllers/productController.js`);

const {
  checkUser,
  validateProduct,
} = require(`../middlewares/mainMiddlewares.js`);

router.get(`/`, showAllProducts);

router.post(`/`, checkUser, validateProduct, addNewProduct);

router.get(`/new`, checkUser, showNewProductForm);

router.get(`/:productId`, showSingleProduct);

router.get(`/:productId/edit`, productEditForm);

router.put(`/:productId`, validateProduct, updateOldProduct);

router.delete(`/:productId`, deleteProduct);

module.exports = router;
