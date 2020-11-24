export type Snippet = { name: string; language: string, value: string }
const snippets: Snippet[] = [
    {
        name: "javascript - simple",
        language: "javascript",
        value: `console.log("hello")`
    },
    {
        name: "python - simple",
        language: "python",
        value: `print("hello")`
    },

]

export default snippets;
