import { createWriteStream } from "fs";

export const write = async () => {
  // Write your code here
  const file = createWriteStream("./src/streams/files/fileToWrite.txt");

  process.stdin.pipe(file);
};

write();
