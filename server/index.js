const express = require(`express`);
const app = express();
const PORT = 3000;

// console.log(express);

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
