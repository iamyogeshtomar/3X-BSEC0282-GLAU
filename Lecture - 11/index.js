const express = require(`express`);
const app = express();
const cookieParser = require(`cookie-parser`);
const PORT = 3000;

(function call() {})();

app.use(cookieParser());

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine</h1>`);
});

app.get(`/cookie/:name/:phone`, (req, res) => {
  const { name, phone } = req.params;
  res.cookie("name", name);
  res.cookie("phone", phone);
  res.cookie("isLoggedIn", "false");
  res.send(`<h1>cookies stored</h1>`);
});

app.get(`/showCookies`, (req, res) => {
  const cookies = req.cookies;
  res.send(`<h1>name:${cookies.name}, phone:${cookies.phone}</h1>`);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
