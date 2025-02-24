const express = require(`express`);
const router = express.Router();

const Product = require(`../Schema/productSchema.js`);

router.get(`/`, async (req, res) => {
  const allProducts = await Product.find();
  res.render(`allProducts.ejs`, { allProducts });
});

router.get(`/new`, (req, res) => {
  res.render(`newProduct.ejs`);
});

router.post(`/`, async (req, res) => {
  const { name, price, rating } = req.body;
  const newProduct = await Product.create({ name, price, rating });
  res.redirect(`/products`);
});

router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  // console.log(singleProduct);
  res.render(`singleProduct.ejs`, { singleProduct });
});

router.get(`/:id/edit`, async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  res.render(`edit.ejs`, { singleProduct });
});

router.put(`/:id`, async (req, res) => {
  const { id } = req.params;
  const { name, price, rating } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, {
    name,
    price,
    rating,
  });
  res.redirect(`/products`);
});

module.exports = router;
