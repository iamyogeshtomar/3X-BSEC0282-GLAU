function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function showPassword(password) {
  console.log(password);
}

console.log(`inside math`);

require(`./test.js`); //inside test

require(`./class.js`);

module.exports = {
  add,
  sub,
};

// console.log(sub(7, 3));
