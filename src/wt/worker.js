import { Worker, parentPort, workerData } from "worker_threads";
// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (workerData?.value) {
    const result = nthFibonacci(workerData.value);
    if (workerData.value % 2 === 0) {
      throw new Error(workerData.id);
    }
    parentPort.postMessage({ result: result, id: workerData.id });
  }
};

sendResult();
