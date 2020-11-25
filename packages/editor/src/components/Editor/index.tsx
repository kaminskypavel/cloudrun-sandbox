import React, {useRef} from "react";
import Editor, {ControlledEditor} from "@monaco-editor/react";
import Toolbar from "../Toolbar";
import "./stlye.css"
import {useStore} from "../../hooks/useStore";
import {observer} from "mobx-react-lite";

const EditorComp = () => {
    const store = useStore();
    const valueGetter = useRef<any>()

    const editorDidMount = (_valueGetter: any,editor:any) => {
        valueGetter.current = _valueGetter;
        // Ctrl + Enter
        editor.addCommand( 2048 | 3 ,() => {
            store.execute().then()
        })
    }

    return <div>
        <Toolbar/>
        <div className="split">
            <ControlledEditor className="editor"
                              editorDidMount={editorDidMount}
                              language={store.language}
                              value={store.selectedSnippet?.value}
                              theme={store.isDark ? 'dark' : 'light'}
                              options={{
                                  minimap: {
                                      enabled: false
                                  }
                              }}
                              onChange={() => store.setEditorValue(valueGetter.current())}
            />

            <Editor className="result-editor"
                    value={store.evaluated}
                    theme={store.isDark ? 'dark' : 'light'}
                    language="javascript"
                    options={{
                        minimap: {
                            enabled: false
                        },
                        readOnly: true
                    }}
            />
        </div>
    </div>;
};

export default observer(EditorComp)
