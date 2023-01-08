import React, { useState } from 'react'
import { Collapse, Input, Button, Col, Row } from 'antd';
import { nanoid } from 'nanoid';
import { ThunderboltFilled } from '@ant-design/icons';
import axios from 'axios'

const { Panel } = Collapse
const { TextArea } = Input

export default function ApiContent(props) {
    const { params, data, path, method } = props;
    let myParams = params;
    let myData = data;

    const [res, setRes] = useState('')

    let paramsContent = <></>
    let dataContent = <></>
    let paramsForm = <></>
    let dataForm = <></>
    if (params !== undefined) {
        paramsContent = (
            <Panel header="Query参数">
                <ul style={{ paddingLeft: 24 }}>
                    {Object.keys(params).map(x => {
                        return (
                            <li key={nanoid()}><b>{x}: </b>{params[x]}</li>
                        )
                    })}
                </ul>
            </Panel>
        )
        paramsForm = (
            <>
                <h2>Query参数</h2>
                <Row gutter={[8, 8]}>
                    {
                        Object.keys(params).map(x => {
                            return (
                                <Col key={nanoid()} xs={24}>
                                    <Input placeholder={x} onChange={v => { myParams[x] = v }} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
        )
    }
    if (data !== undefined) {
        dataContent = (
            <Panel header="Data参数">
                {Object.keys(data).map(x => {
                    console.log(x)
                    return <li key={nanoid()}><b>{x}: </b>{data[x]}</li>
                })}
            </Panel>
        )
        dataForm = (
            <>
                <h2>Data参数</h2>
                <Row gutter={[8, 8]}>
                    {
                        Object.keys(data).map(x => {
                            return (
                                <Col key={nanoid()} xs={24}>
                                    <Input placeholder={x} onChange={v => { myData[x] = v }} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
        )
    }
    function test() {
        axios({
            method: method,
            url: path,
            params: myParams,
            data: myData
        }).then(res => { setRes(res.data) }, err => { setRes(err.message) })
    }
    return (
        <Collapse>
            {paramsContent}
            {dataContent}
            <Panel header="在线测试">
                {paramsForm}
                {dataForm}
                <br />
                <Button onClick={test} type="primary" icon={<ThunderboltFilled />} block>
                    测试
                </Button>
                <br />
                <h3>
                    响应数据
                </h3>
                <TextArea rows={4} value={res} />


            </Panel>
        </Collapse>
    )
}
