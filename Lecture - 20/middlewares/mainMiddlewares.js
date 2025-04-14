const joi = require(`joi`);

const checkUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash(`error`, `login first`);
  return res.redirect(`/signin`);
};

const productSchema = joi.object({
  name: joi.string().min(3).max(50).required(),
  description: joi
    .string()
    .min(10)
    .max(200)
    .default(`No description available`),
  price: joi.number().min(0).required(),
});

const validateProduct = async (req, res, next) => {
  const { name, price, description } = req.body;
  const { error } = await productSchema.validateAsync({
    name,
    price,
    description,
  });
  if (error) {
    req.flash(`error`, `Invalid product data!!!`);
    return res.redirect(`/products/new`);
  }
  return next();
};

// const checkMerchant = (req, res) => {};

module.exports = { checkUser, validateProduct };
