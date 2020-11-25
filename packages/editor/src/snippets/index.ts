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

]

export default snippets;
