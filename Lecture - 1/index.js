// console.log(__dirname);

// console.log(math)

// console.log(math.add(2, 5));

// console.log(`before importing file`);

require(`./math.js`); // first executes test.js file and then prints "inside math.js"

console.log(`inside index.js`);

require(`./test.js`); //prints "inside class file" and then "inside test file"

// console.log(`inside index.js`);

// console.log(math.add(2, 7));

// console.log(math.pi);

// console.log(module);