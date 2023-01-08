import React from 'react'
import { Badge, Card } from 'antd'
import ApiHeader from '../ApiHeader'
import ApiContent from '../ApiContent'

function getColor(method) {
    switch (method) {
        case 'GET': {
            return '#1677ff'
        }
        case 'POST': {
            return '#faad14'
        }
        default: {
            return '#fff'
        }
    }
}

export default function ApiViewer(props) {
    const { info } = props;
    const { method, path, name, params } = info;
    const methodColor = getColor(method);
    return (
        <div style={{ padding: '10px' }} id={path}>
            <Badge.Ribbon text={method} placement='start' color={methodColor}>
                <Card>
                    <ApiHeader method={method} path={path} name={name} />
                    <ApiContent params={params} method={method} path={path} />
                </Card>
            </Badge.Ribbon>
        </div>
    )
}
