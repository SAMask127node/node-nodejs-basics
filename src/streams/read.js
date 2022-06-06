import { createReadStream } from "fs";

export const read = async () => {
  // Write your code here
  createReadStream("./src/streams/files/fileToRead.txt").pipe(process.stdout);
};

read();
