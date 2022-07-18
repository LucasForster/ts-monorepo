import process from "process";

import { test } from "../lib/test.js";

console.log("Backend", test());
console.log("NODE_ENV", process.env.NODE_ENV);

// do not exit, see https://stackoverflow.com/questions/44137481
process.stdin.resume();
process.on("SIGINT", () => process.stdin.pause());
