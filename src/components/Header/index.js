import React from 'react';
import {Layout, Menu} from 'antd';
import User from '../User/index';
import Fullscreen from '../Fullscreen/index';
import I18n from '../I18n/index';
import './index.less';
const { Header } = Layout;

function demo() {   
    return (
      <Header>
         <div className="header">
          <div className="row">
            <div className="logo">系统logo</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            
        </div> 
        <div className="row">
          <I18n></I18n>
          <User></User>
          <Fullscreen />
        </div>
        
         </div>
         </Header> 
    );
  }
  
  export default React.memo(demo)