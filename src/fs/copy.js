import { access, copyFile, mkdir, readdir } from "fs";
import * as path from "path";

export const copy = async () => {
  // Write your code here
  const errMsg = "FS operation failed";
  access("./src/fs/files", (err) => {
    if (err) {
      throw new Error(errMsg);
    }
    access("./src/fs/files_copy", (err) => {
      if (!err) {
        throw new Error(errMsg);
      }
      mkdir(path.join("./src/fs/", "files_copy"), (err) => {
        readdir("./src/fs/files", (err, files) => {
          files.forEach((file) => {
            copyFile(
              path.join("./src/fs/files", file),
              path.join("./src/fs/files_copy", file),
              () => {}
            );
          });
        });
      });
    });
  });
};

copy();
