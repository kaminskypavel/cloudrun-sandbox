export type Snippet = { name: string; language: string, value: string }
const snippets: Snippet[] = [
    {
        name: "javascript - simple",
        language: "javascript",
        value: `console.log("hello")`
    },
    {
        name: "javascript - spawn_process",
        language: "javascript",
        value: `const {execSync} = require('child_process')\n        
const data = execSync("ls") .toString();
console.log(data);`
    },
    {
        name: "javascript - recursive ls",
        language: "javascript",
        value: `"use strict";

const  fs = require("fs");
const PATH = "./../../";

var path = process.cwd();
var files = [];

var getFiles = function (path, files) {
  fs.readdirSync(path).forEach(function (file) {
    var subpath = path + "/" + file;

    if (fs.lstatSync(subpath).isDirectory()) {
      getFiles(subpath, files);
    } else {
      files.push(path + "/" + file);
    }
  });
};

getFiles(PATH, files);
console.log(JSON.stringify(files));
`
    },
    {
        name: "python - simple",
        language: "python",
        value: `print("hello")`
    },
    {
        name: "python - short sleep",
        language: "python",
        value: `import time\n
time.sleep(2)
print("Printed after 2 seconds.")
`
    },
    {
        name: "python - too long sleep",
        language: "python",
        value: `import time\n
time.sleep(20*1000)
print("this will never be printed")
`
    },
    {
        name: "typescript - filesystem",
        language: "javascript",
        value: `//transpiled wuth babel https://babeljs.io/en/repl

/*
    import fs from "fs"

    const res:string = fs.readdirSync(".")
    console.log(res)
*/

"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const res = _fs.default.readdirSync(".");

console.log(res);
`
    }

]

export default snippets;
