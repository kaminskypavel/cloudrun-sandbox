import {editorState, snippetSelector} from "../../atoms";
import React, {useRef} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {Button, Col, Divider, Input, Row, Select, Switch} from "antd";
import snippets from "../../snippets";
import axios from "axios";
// import axios from "axios";

const {Option} = Select;

const Toolbar = () => {
    const [state, setState] = useRecoilState(editorState);
    const changeTheme = () => setState({...state, isDark: !state.isDark});

    const changeSnippet = (value: string) => {
        setState({...state, snippetName: value});
    }

    const snippet = useRecoilValue(snippetSelector);

    const runCode = async () => {
        const url = ref.current.state.value
        console.log(url);
        const {data} = await axios.post(url, {script: snippet.value});
        alert(JSON.stringify(data))
    }

    const ref = useRef<any>()

    return <div>
        <Input ref={ref}
               addonBefore="Cloud Run Endpoint"
               placeholder=" "
               defaultValue="http://localhost:8080/eval"/>

        <Divider orientation="center"/>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <Button type="primary"  onClick={runCode}>Execute</Button>
            </Col>

            <Col className="gutter-row" span={3}>

                <Switch defaultChecked onChange={changeTheme}
                        checkedChildren="Dark" unCheckedChildren="Light"/>
            </Col>
            <Col className="gutter-row" span={3}>
                <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="Language"
                    optionFilterProp="children"
                    onChange={changeSnippet}
                    defaultValue={snippet.language}
                >
                    {snippets.map(s => <Option key={s.language} value={s.name}>{s.name}</Option>)}
                </Select>
            </Col>

        </Row>
        <Divider orientation="left"/>
    </div>
}

export default Toolbar;
