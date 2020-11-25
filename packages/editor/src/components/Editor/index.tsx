import React from "react";
import Editor from "@monaco-editor/react";
import Toolbar from "../Toolbar";
import "./stlye.css"
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";
// eslint-disable-next-line import/no-anonymous-default-export

const EditorComp = () => {
    const store = useStore();
    return <div>
        <Toolbar/>
        <div className="split">
            <Editor className="editor"
                    language={store.language}
                    value={store.selectedSnippet?.value}
                    theme={store.isDark ? 'dark' : 'light'}
                    options={{minimap: {enabled: false}}}
            />

            <Editor className="editor"
                    value={store.evaluated}
                    theme={store.isDark ? 'dark' : 'light'}
                    options={{minimap: {enabled: false}}}
            />
        </div>
    </div>;
};

export default observer(EditorComp)
