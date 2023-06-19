const { readFileSync, writeFileSync } = require("fs");
// ! fs 모듈이 가진 함수로, 동기적으로 읽고 쓰기 가능
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

// ! writeFileSync(파일 쓸 경로 , 작성할 파일 내용, 옵션 :파일 작성시 동작제어 가능 위의 경우 내용을 추가(append)함. )

console.log("done with this task");
console.log("starting the next one ");

//! sync이기 때문에 순서대로 나온다.
