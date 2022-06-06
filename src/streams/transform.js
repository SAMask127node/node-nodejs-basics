import { Transform } from "stream";
import * as process from "process";

export const transform = async () => {
  // Write your code here
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

transform();
