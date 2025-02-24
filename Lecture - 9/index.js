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

app.use(`/products`, require(`./Routes/productRoutes.js`));

app.get(`/`, (req, res) => {
  res.send(`<h1>This is home route</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
