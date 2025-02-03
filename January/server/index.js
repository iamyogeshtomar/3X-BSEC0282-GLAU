const express = require(`express`);
const app = express();
const ejs = require(`ejs`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = 3000;

// console.log(express);

(async function () {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/zomato`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error.message);
  }
})();

// mongoose.connect(`mongodb://127.0.0.1:27017/zomato`);

const User = require(`./Schemas/userSchema.js`);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, `views`)));

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

app.get(`/formPath`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `views`, `index.html`));
});

app.post(`/formPath`, async (req, res) => {
  // console.log(req.body);
  console.log(req.body);
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  res.render(`singleUser.ejs`, { newUser });
  // console.log(newUser);
  // const newUser = User
});

app.use((req, res) => {
  // res.send(`<h1>This is global middleware handler</h1>`);
  res.sendFile(`errorPage.html`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
