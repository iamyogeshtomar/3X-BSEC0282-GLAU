const express = require(`express`);
const app = express();
// const mongoose = require(`mongoose`);
const { connect } = require(`mongoose`);
const { resolve } = require(`path`);
const PORT = 3000;

// Estabalishing Database connection
(async () => {
  try {
    const dbName = `blinkit`;
    await connect(`mongodb://127.0.0.1:27017/${dbName}`); //Using await because mongoose.connect function runs asynchronously!
    console.log(`Database ${dbName} connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

const Product = require(`./Schemas/productSchema.js`);

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`<h1>This is home route !!!!</h1>`);
});

app.get(`/productForm`, (req, res) => {
  res.sendFile(resolve(__dirname, `public`, `index.html`));
});

app.post(`/productForm`, async (req, res) => {
  const { name, price, stock } = req.body;
  const newProduct = await Product.create({ name, price, stock });
  res.send(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
