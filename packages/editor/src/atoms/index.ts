import {atom, selector} from "recoil";
import snippets from "../snippets";


export const editorState = atom({
    key: 'editorState',
    default: {
        isDark: true,
        snippetName: "javascript - simple",
    },
});


export const snippetSelector = selector({
    key: 'snippetState',
    get: ({get}) => {
        const state = get(editorState);
        return snippets.find(s => s.name === state.snippetName)!
    },
});
