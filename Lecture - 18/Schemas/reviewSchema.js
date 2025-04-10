const { Schema, model } = require(`mongoose`);

const reviewSchema = new Schema({
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    default: "No Description Available!!!",
  },
});

module.exports = new model(`Review`, reviewSchema);
