import { Gunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

export const decompress = async () => {
  // Write your code here

  const gzUnzipTransform = Gunzip();
  const fileToGunzip = createReadStream("./src/zip/files/archive.gz");
  const newGunzipedFile = createWriteStream(
    "./src/zip/files/fileToCompress.txt"
  );

  fileToGunzip.pipe(gzUnzipTransform).pipe(newGunzipedFile);
};

decompress();
