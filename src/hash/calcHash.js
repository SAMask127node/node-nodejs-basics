import { createHash } from "crypto";

export const calculateHash = async () => {
  // Write your code here
  const endpoint = "./src/hash/files/fileToCalculateHashFor.txt";

  return createHash("sha256", endpoint).digest("hex");
};

console.log(await calculateHash());
