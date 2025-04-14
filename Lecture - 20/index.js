const express = require(`express`);
const app = express();
const path = require(`path`);
const { connect } = require(`mongoose`);
const session = require(`express-session`);
const flash = require(`connect-flash`);
const MongoStore = require(`connect-mongo`);
const methodOverride = require(`method-override`);
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`);
const PORT = 3000;

(async () => {
  try {
    await connect(`mongodb://127.0.0.1:27017/flipzon`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

const User = require(`./Schemas/userSchema.js`);

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: `keyboard dog`,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb://127.0.0.1:27017/flipzon`,
    }),
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.resolve(__dirname, `views`)));

app.use((req, res, next) => {
  res.locals.success = req.flash(`success`);
  res.locals.error = req.flash(`error`);
  res.locals.warning = req.flash(`warning`);
  res.locals.currentUser = req.user || null;
  next();
});

app.use(methodOverride(`_method`));

// app.use(require(`./Routes/userRoutes.js`));

app.use(require(`./Routes/reviewRouter.js`));
app.use(`/products`, require(`./Routes/productRoutes.js`));
app.use(require(`./Routes/userRoutes.js`));

app.get(`/`, (req, res) => {
  return res.redirect(`/products`);
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/verify`, (req, res) => {
  console.log(req.user);
  res.redirect(`back`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
