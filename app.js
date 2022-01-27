const {
  writeFileSync
} = require('fs')

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/large_file.txt', `Hello, World ${i}\n`, {
    flag: 'a'
  });
}
console.log('Finished !!');
