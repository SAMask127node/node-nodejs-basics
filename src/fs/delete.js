import { stat, unlink } from "fs";

export const remove = async () => {
  // Write your code here
  const err_msg = "FS operation failed";
  const endpoint = "./src/fs/files/fileToRemove.txt";

  stat(endpoint, (err, data) => {
    if (err) {
      throw new Error(err_msg);
    }
    unlink(endpoint, () => {});
  });
};

remove();
