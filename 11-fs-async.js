const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with thist test");
      }
    );
  });
});
console.log("starting next task");

//! start -> starting next task -> done with this test , console.log 찍으면 async 하게 작동하기 때문에 시간 절약이 된다.
