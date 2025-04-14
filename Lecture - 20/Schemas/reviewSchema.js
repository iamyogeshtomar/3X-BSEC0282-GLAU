const { Schema, model } = require(`mongoose`);

const reviewSchema = new Schema({
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  comment: {
    type: String,
    default: "No Description Available!!!",
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    req: `User`,
  },
});

module.exports = new model(`Review`, reviewSchema);
