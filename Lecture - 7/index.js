const express = require(`express`);
const app = express();
const { connect } = require(`mongoose`);
const { resolve } = require(`path`);
// const ejs = require(`ejs`);
const PORT = 3000;

(async () => {
  try {
    await connect(`mongodb://127.0.0.1:27017/blinkit`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

const Product = require(`./Schemas/productSchema.js`);

app.set(`view engine`, `ejs`);

app.use(express.static(resolve(__dirname, `views`)));

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`<h1>This is home route of application!!!</h1>`);
});

app.get(`/products`, async (req, res) => {
  const allProducts = await Product.find();
  res.render(`allProducts.ejs`, { allProducts });
});

app.get(`/productForm`, (req, res) => {
  res.render(`newProductForm.ejs`);
});

app.post(`/productForm`, async (req, res) => {
  const { name, price, stock } = req.body;
  const newProduct = await Product.create({ name, price, stock });
  res.redirect(`/products`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://127.0.0.1:${PORT}`);
});
