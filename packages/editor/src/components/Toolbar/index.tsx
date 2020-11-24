import {editorState, snippetSelector} from "../../atoms";
import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {Col, Divider, Input, Row, Select, Switch} from "antd";
import snippets from "../../snippets";

const {Option} = Select;

const Toolbar = () => {
    const [state, setState] = useRecoilState(editorState);
    const changeTheme = () => setState({...state, isDark: !state.isDark});

    const changeSnippet = (value: string) => {
        setState({...state, snippetName: value});
    }

    const snippet = useRecoilValue(snippetSelector);

    return <div>
        <Input addonBefore="Cloud Run Endpoint" placeholder=" "/>
        <Divider orientation="center"/>
        <Row gutter={16}>
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
