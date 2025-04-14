const passport = require(`passport`);
const LocalStrategy = require(`passport-local`);
const bcryptjs = require(`bcryptjs`);
const User = require(`../Schemas/userSchema.js`);

passport.use(
  new LocalStrategy(async (email, password, done) => {
    if (err) return done(err);
    const user = await User.findOne({ email: email });
    if (!user) {
      return done(null, false);
    }
    if (user) {
      const checkPassword = await bcryptjs.compare(password, user.password);
      if (!checkPassword) {
        return done(null, false);
      }
    }
    return done(null, user);
  })
);

module.exports = { passport };