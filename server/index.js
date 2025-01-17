const express = require(`express`);
const app = express();
const PORT = 3000;

// console.log(express);

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working</h1>`);
});

app.get(`/params/:name/:place`, (req, res) => {
  // console.log(req.params);
  res.send(
    `<h1>My name is ${req.params.name} and I'm from ${req.params.place}</h1>`
  );
});

app.get(`/query`, (req, res) => {
  // console.log(req.query);
  res.send(
    `<h1>My name is ${req.query.name} and I'm from ${req.query.place} and I'm ${req.query.age}</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
