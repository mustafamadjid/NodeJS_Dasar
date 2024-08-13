import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUnhandledRejection = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function sampleError() {
  throw new Error("Sample Error");
}

sampleError();
