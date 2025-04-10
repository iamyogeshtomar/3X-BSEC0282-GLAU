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

const { checkUser } = require(`../middlewares/mainMiddlewares.js`);

router.get(`/`, showAllProducts);

router.get(`/newProduct`, checkUser, showNewProductForm);

router.post(`/`, checkUser, addNewProduct);

router.get(`/:productId`, showSingleProduct);

router.get(`/:productId/edit`, productEditForm);

router.put(`/:productId`, updateOldProduct);

router.delete(`/:productId`, deleteProduct);

module.exports = router;
