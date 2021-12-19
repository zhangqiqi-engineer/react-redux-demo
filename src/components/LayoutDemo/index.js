import React from 'react';
import {Layout, Menu, Breadcrumb,Icon} from 'antd';
import { withRouter } from "react-router-dom";

import Nar from'../Nar/index';
import '../Layout/index.less'
import {mainRouters} from '../../routers/index'
const { Header, Content, Sider } = Layout;

const menu=mainRouters.filter(item=>item.isShow);
function LayoutDemo(props) {   
    return (
        <Layout>
        <Header className="header">
        <div className="logo" ></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Header>
        <Layout>
        <Sider width={200} className="site-layout-background">
        <Menu
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            {
                menu.map(item => {
                    return <Menu.Item key={item.path} onClick={p=>props.history.push(p.key)}><Icon type={item.icon}></Icon>
                    {item.title}</Menu.Item>
                })
            }
        </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
            <Nar/>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
                {props.children}
            </Content>
        </Layout>
        </Layout>
    </Layout>
    );
  }
  
  export default withRouter(LayoutDemo);