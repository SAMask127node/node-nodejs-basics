import * as fs from "fs";
import * as path from "path";

export const rename = async () => {
  // Write your code here
  const base_dir = "./src/fs/files";
  const endpoint_name_old = "wrongFilename.txt";
  const endpoint_name_new = "properFilename.md";
  const err_msg = "FS operation failed";

  fs.stat(path.join(base_dir, endpoint_name_old), (err, data) => {
    if (err) {
      throw new Error(err_msg);
    }
    fs.stat(path.join(base_dir, endpoint_name_new), (err, data) => {
      if (!err) {
        throw new Error(err_msg);
      }
      fs.rename(
        path.join(base_dir, endpoint_name_old),
        path.join(base_dir, endpoint_name_new),
        () => {}
      );
    });
  });
};

rename();
