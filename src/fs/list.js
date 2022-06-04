import { access, readdir } from "fs";

export const list = async () => {
  // Write your code here
  const err_msg = "FS operation failed";
  const endpoint = "./src/fs/files";

  access(endpoint, (err) => {
    if (err) {
      throw new Error(err_msg);
    }
    readdir(endpoint, (e, files) => {
      console.log(files);
    });
  });
};

list();
