const express = require(`express`);
const app = express();
const { resolve } = require(`path`);
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/form`, (req, res) => {
  res.sendFile(resolve(__dirname, `public`, `index.html`));
});

app.post(`/form`, (req, res) => {
  // const formData = req.body;
  const { name, price, stock } = req.body;
  res.send(
    `<h1>We're selling ${name} at $${price} and we have ${stock} items in stock</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://127.0.0.1:${PORT}`);
});
