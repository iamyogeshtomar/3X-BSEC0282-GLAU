const express = require(`express`);
const app = express();
const path = require(`path`);
const { connect } = require(`mongoose`);
const PORT = 3000;

(async () => {
  try {
    connect(`mongodb://127.0.0.1:27017/flipzon`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.static(path.resolve(__dirname, `views`)));

app.use(express.urlencoded({ extended: true }));

app.use(require(`./Routes/userRoutes.js`));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
