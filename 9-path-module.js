const path = require("path");

// console.log(path);
// console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const relativePath = "content/subfolder/test.text";

const absolute = path.resolve(__dirname, "content", "subfolder", "test.text");
const absolute2 = path.resolve(relativePath);
console.log(absolute);
console.log(absolute2);
// ! path의 join이란?
//! path 모듈의 join 메서드는 Node.js에서 파일 경로를 조합하는 데 사용되는 함수

//! 1 path.join 메서드의 기능:
//! path.join 메서드는 파일 경로 세그먼트를 결합하여 새로운 경로를 생성
//! 이때, 경로 세그먼트는 문자열로 전달되며, 각 세그먼트는 / 또는 \ 구분자로 분리됨
//! path.join은 시스템에 맞는 구분자를 자동으로 처리하므로 운영 체제 간 이식성이 높음

//! 2 path.join 메서드의 사용 이유:
//! 경로를 생성할 때 하드코딩하는 대신 path.join을 사용하면
//! 운영 체제별로 경로 구분자를 처리하므로 코드의 이식성과 호환성이 향상됩니다.

//!  path.resolve란
//!  1.path.resolve 메서드의 기능:
//!    path.resolve 메서드는 전달된 경로 세그먼트를 절대 경로로 결합합니다.
//!  2.path.resolve 메서드의 사용 이유:
//!    상대 경로를 절대 경로로 변환하여 경로를 정규화합니다.
//!    이는 파일 경로를 절대 경로로 해석하거나 절대 경로가 필요한 다양한 작업에 유용합니다.
