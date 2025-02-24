const router = require(`express`).Router();
const bcryptjs = require(`bcryptjs`);

const User = require(`../Schema/userSchema.js`);

router.get(`/signup`, (req, res) => {
  res.render(`newUserForm.ejs`);
});

router.post(`/signup`, async (req, res) => {
  const { name, email, phone, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });
  res.send(newUser);
});

router.get(`/signin`, (req, res) => {
  res.render(`signinForm.ejs`);
});

router.post(`/signin`, async (req, res) => {
  const { name, email, phone, password } = req.body;
  const singleUser = await User.findOne({ email: email });
  const result = await bcryptjs.compare(password, singleUser.password);
  if (result) {
    res.json({ message: "Password correct!!!!" });
  } else {
    res.json({ message: "Password incorrect!!!!" });
  }
});

module.exports = router;
