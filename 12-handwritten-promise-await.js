const {
  readFile,
  writeFile
} = require('fs');

const getText = (file_path, encoding) => {
  return new Promise((resolve, reject) => {
    readFile(file_path, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

/*
getText('./content/first.txt', 'utf8')
  .then(result => console.log(`Resolving: ${result}`)) //resolve callback function
  .catch(err => console.log(`Rejecting: ${err}`)) //reject callback function
*/


const writeText = (file_path, encoding) => {
  return new Promise((resolve, reject) => {
    writeFile(file_path, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}


const start = async () => {
  try {
    const first = await getText('./content/first.txt', 'utf8');
    const second = await getText('./content/subfolder/test.txt', 'utf8');
    const writeString = `Handwritten Promise, Await:\nFirst: ${first}Second: ${second}`;
    await writeText('./content/result.txt', writeString, 'utf8');
  } catch (err) {
    console.log(err);
  }
}

start()
