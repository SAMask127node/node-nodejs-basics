import { argv } from "process";

export const parseArgs = () => {
  // Write your code here
  let textToPrint = "";
  for (let index = 2; index < argv.length; index++) {
    const arg = argv[index];
    if (index % 2 === 0) {
      textToPrint = `${textToPrint}${arg.split("--")[1]} is `;
    } else {
      textToPrint =
        index === argv.length - 1
          ? `${textToPrint}${arg} `
          : `${textToPrint}${arg}, `;
    }
  }
  console.log(textToPrint);
};
