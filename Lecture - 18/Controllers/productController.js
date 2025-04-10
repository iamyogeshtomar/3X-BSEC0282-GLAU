const Product = require(`../Schemas/productSchema.js`);

const showNewProductForm = (req, res) => {
  res.render(`newProductForm.ejs`);
};

const addNewProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = await Product.create({ name, description, price });
  res.redirect(`/`);
};

const showAllProducts = async (req, res) => {
  const allProducts = await Product.find();
  // res.send(allProducts);
  res.render(`homepage.ejs`, { allProducts });
};

const showSingleProduct = async (req, res) => {
  const singleProduct = await Product.findById(req.params.productId);
  // res.send(singleProduct);
  res.render(`showSingleProduct.ejs`, { singleProduct });
};

const productEditForm = async (req, res) => {
  const oldProduct = await Product.findById(req.params.productId);
  // console.log(productId);
  res.render(`productEditForm.ejs`, { oldProduct });
};

const updateOldProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, {
    name,
    price,
    description,
  });
  res.redirect(`/${req.params.productId}`);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.redirect(`/`);
};

module.exports = {
  addNewProduct,
  showNewProductForm,
  showAllProducts,
  showSingleProduct,
  productEditForm,
  updateOldProduct,
  deleteProduct,
};
