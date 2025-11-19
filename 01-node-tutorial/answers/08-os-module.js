const os = require("os");
const user = os.userInfo();
const uptimeSeconds = os.uptime();

const systemInfo = {
  username: user.username,
  homeDir: user.homedir,
  osType: os.type(),
  osRelease: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  uptimeSeconds: uptimeSeconds,
};

console.log("System info:");
console.log(systemInfo);
