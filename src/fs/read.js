import { readFile } from "fs";

export const read = async () => {
  // Write your code here
  const err_msg = "FS operation failed";
  const endpoint = "./src/fs/files/fileToRead.txt";

  readFile(endpoint, "utf8", (err, data) => {
    if (err) {
      throw new Error(err_msg);
    }
    console.log(data);
  });
};

read();
