import { Avatar, Dropdown, Menu, message } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import React, { memo } from 'react';
function User({ username = 'admin', exitUrl = '/login' }) {   
    const navigate = useNavigate();

    // 用户中心
    const handelUserCenter = () => {
      navigate(exitUrl);
      message.error('已退出登录！');
    };
  
    // 个人中心下拉框渲染
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <UserOutlined />
          <span onClick={handelUserCenter}> 修改密码 </span>
        </Menu.Item>
        <Menu.Item key="2">
          <LogoutOutlined />
          <span onClick={handelUserCenter}> 退出登录 </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="user">
        <Avatar shape="square" size="small" style={{ marginLeft: 10}} icon={<UserOutlined />} />
        <Dropdown overlay={menu} placement="bottomCenter" trigger={[ 'click' ]}>
            <span style={{ marginLeft: 10, marginRight: 30 ,color: '#fff'}}>{username||'111'}</span>
        </Dropdown>
      </div>
    );
  }
  
  export default memo(User)