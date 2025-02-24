const express = require(`express`);
const app = express();
const PORT = 5000;

// console.log(express);
// console.log(app);

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
