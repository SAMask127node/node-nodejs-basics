import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

export const compress = async () => {
  // Write your code here
  const gzTransform = createGzip();
  const fileToArchive = createReadStream("./src/zip/files/fileToCompress.txt");
  const newArchivedFile = createWriteStream("./src/zip/files/archive.gz");

  fileToArchive.pipe(gzTransform).pipe(newArchivedFile);
};

compress();
