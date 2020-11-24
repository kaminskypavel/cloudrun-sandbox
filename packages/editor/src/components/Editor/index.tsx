import React from "react";
import Editor from "@monaco-editor/react";
import {useRecoilState, useRecoilValue} from "recoil";
import {editorState, snippetSelector} from "../../atoms";
import Toolbar from "../Toolbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [state] = useRecoilState(editorState);
    const snippet = useRecoilValue(snippetSelector)
    return <div>
        <Toolbar/>
        <Editor height="80vh"
                language={snippet.language}
                value={snippet.value}
                theme={state.isDark ? 'dark' : 'light'}/>
    </div>;
};
