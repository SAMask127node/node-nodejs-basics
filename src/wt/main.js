import { isMainThread, Worker, workerData } from "worker_threads";
import { cpus } from "os";

export const performCalculations = async () => {
  // Write your code here
  let workersCreatedOrder = 0;
  const numOfCpus = cpus().length;

  const runService = async (n) => {
    try {
      const result = await new Promise((resolve, reject) => {
        const worker = new Worker("./src/wt/worker.js", {
          workerData: { value: n, id: workersCreatedOrder },
        });
        workersCreatedOrder++;
        worker.on("message", resolve);
        worker.on("error", reject);
      });
      resultArray.push({
        status: "resolved",
        data: result.result,
        id: result.id,
      });
    } catch (e) {
      resultArray.push({ status: "error", data: null, id: e.message });
    }
  };

  const promisesArray = [];
  const resultArray = [];
  for (let index = 0; index < numOfCpus - 1; index++) {
    let wasInMainThread = false;
    while (!wasInMainThread) {
      if (isMainThread) {
        promisesArray.push(runService(10 + index));
        wasInMainThread = true;
      }
    }
  }

  await Promise.all(promisesArray);
  return resultArray
    .sort((a, b) => a.id - b.id)
    .map((m) => {
      delete m.id;
      return m;
    });
};

console.log(await performCalculations());
