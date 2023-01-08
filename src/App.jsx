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
    <Layout>
      <Sider style={{ overflow: 'auto', position: 'fixed', height: '100vh' }} theme='light'>
        <SideBar />
      </Sider>
      <Layout style={{ marginLeft: '200px' }}>
        <Content>{page}</Content>
      </Layout>
    </Layout>
  )
}
