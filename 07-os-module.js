const os = require('os');

// info about the current user
const user = os.userInfo();
// system runtime
const upTime = os.uptime();

console.log(user)
console.log(upTime)

const current_os = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(current_os);
