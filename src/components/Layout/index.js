import React from 'react';
import {Layout, Menu, Breadcrumb,Icon} from 'antd';
import {Link} from 'react-router-dom';
import Nar from'../Nar/index';
import './index.less';
const { Header, Content, Sider } = Layout;


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            menu:this.props.menu,
        }
    }
    componentDidMount(){

      
    }
    renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    renderMenuItem = ({key, icon, title,}) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon}/>}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
   
    render() {
        const {menu}=this.state;
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
                                return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
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
                            {/* {props.children} */}
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
        )
    }
}
