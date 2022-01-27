const {
  readFile,
  writeFile
} = require('fs');

// path, encoding, callback function
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    const writeString = `Async Callback Hell:\nFirst: ${first}Second: ${second}`
    writeFile('./content/result.txt', writeString, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    })
  })
});

// readFile('./content/subfolder/test.txt', 'utf8');
//
// console.log(first, second)
//
// result = `First File:\t${first}Second File:\t${second}`
// writeFileSync(
//   './content/result.txt',
//   result,
//   {flag: 'a'},
// );

//flag 'a' = append mode
