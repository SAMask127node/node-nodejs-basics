import { readFile, writeFile } from "fs";

export const create = async () => {
  // Write your code here
  const txtFreshFile = "I am fresh and young";
  const errMsg = "FS operation failed";

  readFile("./src/fs/files/fresh.txt", (err, data) => {
    if (err) {
      writeFile("./src/fs/files/fresh.txt", txtFreshFile, () => {});
    } else {
      throw new Error(errMsg);
    }
  });
};

create();
