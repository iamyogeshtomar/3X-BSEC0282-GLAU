const fs = require(`fs/promises`);
const path = require(`path`);

// const message = `This is a message`;

// Synchronous example
// fs.writeFileSync(`message.txt`, message, { encoding: `utf-8`, flag: `w` });

// Callback example
// fs.writeFile(`message.txt`, message, (error) => {
//   if (error) throw error;
//   console.log(`File written sucessfully`);
// });

// Promise example
// async function fileWrite(data) {
//   try {
//     await fs.writeFile(`message.txt`, data, { encoding: `utf-8`, flag: `a` });
//     console.log(`File resolved successfully!!!`);
//   } catch (error) {
//     throw error;
//   }
// }

// fileWrite(message);

const filePath = path.resolve(__dirname, `message.txt`);

async function fileRead() {
  try {
    const data = await fs.readFile(filePath, { encoding: `utf-8` });
    console.log(data);
  } catch (error) {
    throw error;
  }
}

fileRead();
