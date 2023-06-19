//GLOBALS - NO WINDOW !!!!

// __dirname  - path to current direcctory
// __filename - file name
// requrie    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being excuted

console.log(__dirname);
console.log(__filename);
// console.log("Require has the Resolve");
// console.log(require);
// console.log("module is info about current file");
// console.log(module);
// process has a lot of object
// console.log(process);

//
setInterval(() => {
  console.log("hello World");
}, 1000);

//command : `node app.js` or just `node app`
