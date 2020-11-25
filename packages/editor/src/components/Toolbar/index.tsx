import React, {useRef} from "react";
import {Button, Col, Divider, Input, Row, Select, Switch} from "antd";
import snippets from "../../snippets";
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";

const {Option} = Select;

const Toolbar = () => {
    const changeTheme = () => store.setIsDarkTheme(!store.isDark);
    const store = useStore();

    const changeSnippet = (value: string) => {
        store.setSnippetName(value)
    }

    const runCode = async () => {
        const url = ref.current.state.value
        console.log(url);

        // const {data} = await axios.post(url, {script: snippet.value, language: snippet.language});
        // alert(JSON.stringify(data))
    }

    const ref = useRef<any>()

    return <div>
        {JSON.stringify(useStore())}
        <Input ref={ref}
               addonBefore="Cloud Run Endpoint"
               placeholder=" "
               defaultValue="http://localhost:8080/eval"/>

        <Divider orientation="center"/>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <Button type="primary" onClick={runCode}>Execute</Button>
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
                    defaultValue={store.language}
                >
                    {snippets.map(s => <Option key={s.language} value={s.name}>{s.name}</Option>)}
                </Select>
            </Col>

        </Row>
        <Divider orientation="left"/>
    </div>
}

export default observer(Toolbar);
