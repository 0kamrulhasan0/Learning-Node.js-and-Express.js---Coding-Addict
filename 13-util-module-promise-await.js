const {
  readFile,
  writeFile
} = require('fs');

const util = require('util');
const getText = util.promisify(readFile);
const writeText = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await getText('./content/first.txt', 'utf8');
    const second = await getText('./content/subfolder/test.txt', 'utf8');
    const writeString = `Util Modul Promise, Await:\nFirst: ${first}Second: ${second}`;
    await writeText('./content/result.txt', writeString, 'utf8');
  } catch (err) {
    console.log(err);
  }
}

start()
