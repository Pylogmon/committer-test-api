import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Committer', '/committer'),
    getItem('Other', '/other')
];

export default function SideBar() {
    let navigate = useNavigate()

    function route(v) {
        const { key } = v;
        navigate(key);
    }

    return (
        <Menu onSelect={route} defaultSelectedKeys={['/committer']} mode="inline" items={items} />
    )
}
