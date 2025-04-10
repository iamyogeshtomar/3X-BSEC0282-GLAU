const { Schema, model } = require(`mongoose`);
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    length: 10,
  },
  email: {
    unique: true,
    type: String,
    required: true,
    trim: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = new model(`User`, userSchema);
