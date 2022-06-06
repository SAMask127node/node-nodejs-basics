import { spawn } from "child_process";

export const spawnChildProcess = async (args) => {
  // Write your code here
  const ls = spawn("powershell", ["node", "src/cp/files/script.js", ...args]);

  process.stdin.pipe(ls.stdin);

  ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
};

const arr = ["er", "tr", "gh", "ty"];
spawnChildProcess(arr);
