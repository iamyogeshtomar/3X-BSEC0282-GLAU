const Product = require(`../Schemas/productSchema.js`);
const Review = require(`../Schemas/reviewSchema.js`);

const postReview = async (req, res) => {
  const { rating, comment } = req.body;
  // console.log(rating, comment);
  const { productId } = req.params;
  console.log(productId);
  const product = await Product.findById(productId);
  const review = new Review({ rating, comment, postedBy: req.user });
  await product.reviews.push(review);
  await product.save();
  res.redirect(`products/${productId}`);
  console.log(`Working or not`);
};

module.exports = { postReview };
