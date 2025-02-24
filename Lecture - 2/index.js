const fs = require(`fs`);
const fsPromises = require(`fs/promises`);
const path = require(`path`);

const dataString = "This is the data to be written in file";

const filePath = path.resolve(__dirname, `newFolder`, `sample.txt`);

// Synchronous example
// fs.writeFileSync(`sample.txt`, dataString, { encoding: `utf-8`, flag: `a` });
// console.log(`file written successfully!!!!`);

// Callback example
// fs.writeFile(`sample.txt`, dataString, { encoding: `utf-8`, flag: `a` }, (error) => {
//     if (error) throw error;
//     console.log(`File written successfully!!!`);
// });

// Promise example
(async function writeFileUsingFileSystem() {
    try {
        await fsPromises.writeFile(filePath, dataString, { encoding: `utf-8`, flag: `a` });
        console.log(`File written successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

// Homework 1 to find out what fs.readFileSync return
// Homework 2 to try fs.unlink on your own