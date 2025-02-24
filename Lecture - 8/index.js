const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const ejs = require(`ejs`);
const methodOverride = require(`method-override`);
const path = require(`path`);
const PORT = 3000;

(async function () {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/blinkit`);
    console.log(`Database connected!!!`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(methodOverride(`_method`));

app.set(`view engine`, `ejs`);
app.use(express.static(path.resolve(__dirname, `views`)));

app.use(express.urlencoded({ extended: true }));

const Product = require(`./Schema/productSchema.js`);

app.get(`/`, (req, res) => {
  res.send(`<h1>This is home route</h1>`);
});

app.get(`/products`, async (req, res) => {
  const allProducts = await Product.find();
  res.render(`allProducts.ejs`, { allProducts });
});

app.get(`/product/new`, (req, res) => {
  res.render(`newProduct.ejs`);
});

app.post(`/products`, async (req, res) => {
  const { name, price, rating } = req.body;
  const newProduct = await Product.create({ name, price, rating });
  res.redirect(`/products`);
});

app.get(`/products/:id`, async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  // console.log(singleProduct);
  res.render(`singleProduct.ejs`, { singleProduct });
});

app.get(`/products/:id/edit`, async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  res.render(`edit.ejs`, { singleProduct });
});

app.put(`/products/:id`, async (req, res) => {
  const { id } = req.params;
  const { name, price, rating } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, {
    name,
    price,
    rating,
  });
  res.redirect(`/products`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
