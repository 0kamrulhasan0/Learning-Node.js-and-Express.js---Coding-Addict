const {
  readFile,
  writeFile
} = require('fs').promises;


const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/subfolder/test.txt', 'utf8');
    const writeString = `fs Module Promise, Await:\nFirst: ${first}Second: ${second}`;
    await writeFile('./content/result.txt', writeString, 'utf8');
  } catch (err) {
    console.log(err);
  }
}

start()
