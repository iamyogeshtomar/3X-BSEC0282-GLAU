const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/params/:name/:place`, (req, res) => {
  // const params = req.params;
  const { name, place } = req.params;
  res.send(`<h1>My name is ${name} and I'm from ${place}</h1>`);
});

app.get(`/query`, (req, res) => {
  // const query = req.query;
  const { actor, movie } = req.query;
  res.send(`<h1>${actor} worked in ${movie}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://127.0.0.1:${PORT}`);
});
