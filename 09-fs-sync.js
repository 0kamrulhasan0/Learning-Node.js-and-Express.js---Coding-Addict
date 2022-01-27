const {
  readFileSync,
  writeFileSync
} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

console.log(first, second)

result = `Sync Version:\nFirst File:\t${first}Second File:\t${second}`
writeFileSync(
  './content/result.txt',
  result, {
    flag: 'a'
  },
);

//flag 'a' = append mode
