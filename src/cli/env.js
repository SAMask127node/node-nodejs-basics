export const parseEnv = () => {
  // Write your code here
  const rssEnv = Object.entries(process.env).filter(
    (env) => env[0].split("_")[0] === "RSS"
  );
  let textToPrint = "";
  for (let index = 0; index < rssEnv.length; index++) {
    const env = rssEnv[index];
    textToPrint =
      index === rssEnv.length - 1
        ? `${textToPrint}${env[0]}=${env[1]}`
        : `${textToPrint}${env[0]}=${env[1]}; `;
  }
  console.log(textToPrint);
};

parseEnv();
