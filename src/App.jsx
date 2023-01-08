import React, { useState } from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom';
import SideBar from './components/SideBar'
import routes from './routes';

const { Sider, Content } = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const page = useRoutes(routes);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <SideBar />
      </Sider>
      <Layout>
        <Content>{page}</Content>
      </Layout>
    </Layout>
  )
}
