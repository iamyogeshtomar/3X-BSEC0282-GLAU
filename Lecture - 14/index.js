const express = require(`express`);
const app = express();
const path = require(`path`);
const { connect } = require(`mongoose`);
const methodOverride = require(`method-override`);
const PORT = 3000;

(async () => {
  try {
    connect(`mongodb://127.0.0.1:27017/flipzon`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.static(path.resolve(__dirname, `views`)));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride(`_method`));

// app.use(require(`./Routes/userRoutes.js`));

app.use(require(`./Routes/productRoutes.js`));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
