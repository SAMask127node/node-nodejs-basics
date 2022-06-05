export const parseEnv = () => {
  // Write your code here
  let textToPrint = "";
  const envKeys = Object.keys(process.env);
  for (let index = 0; index < envKeys.length; index++) {
    const env = envKeys[index];
    if (env.split("_")[0] === "RSS") {
      textToPrint = `${textToPrint}${env}=${process.env[env]}; `;
    }
  }
  console.log(textToPrint);
};

parseEnv();
