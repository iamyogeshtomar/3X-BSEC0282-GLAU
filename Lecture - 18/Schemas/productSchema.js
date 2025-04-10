const { Schema, model } = require(`mongoose`);
const Review = require(`./reviewSchema.js`);

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    required: true,
    type: String,
    trim: true,
    default: `No Description Available!!!`,
  },
  price: {
    type: Number,
    required: true,
  },
  // averageRating: {
  //   type: Number,
  //   min: 0,
  //   max: 5,
  // },
  // reviews: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: `Review`,
  //   },
  // ],
});

module.exports = new model(`Product`, productSchema);
