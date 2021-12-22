import React,{memo}from 'react';
import {Layout, Menu} from 'antd';
import { useNavigate } from "react-router-dom";

import Nar from'../Nar/index';
import Header from '../Header/index.js'
import {mainRoutersMenu} from '../../routers/index';
import './index.less'
const { Content, Sider } = Layout;

const menu=mainRoutersMenu.filter(item=>item.isShow);

function LayoutDemo(props) {   
    const navigate = useNavigate();

const  renderSubMenu = ({path, icon, title, children}) => {
        return (
            <Menu.SubMenu key={path} title={title} icon={icon}>
                {
                    children && children.map(item => {
                        return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
const   renderMenuItem = ({path, icon, title}) => {
        return (
            <Menu.Item key={path} onClick={p=>{navigate(p.key);console.log("p",p)}} icon={icon}>
            {title}
            </Menu.Item>
        )
    }

    return (
        <Layout>
        <Header></Header>
        <Layout>
        <Sider width={200} className="site-layout-background">
        <Menu
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            {
                menu.map(item => {
                    return item.children&&item.children.length>0? renderSubMenu(item) : renderMenuItem(item)

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
  
  export default memo(LayoutDemo);