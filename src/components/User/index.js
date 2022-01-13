import { Avatar, Dropdown, Menu, message,Modal,Form,Input,Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import React, { memo,useState } from 'react';
import * as Api from "services/index.js";

import "./index.less";
function User({userName="admin",exitUrl = '/login' }) {   
    const navigate = useNavigate();
    const [vis,setVis] = useState(false);

    // 用户中心
    const handelUserCenter = async() => {
      const res=await Api.post('/api/user/logOut',{});
      if (res.code==1) {
        message.success(`${res.msg}`); 
      }else{
        message.error(`${res.msg}`)
      }
      navigate(exitUrl);
    };
  
    const handlePassword=()=>{
      setVis(true);
    }
    const handleOk = async(values) => {
      const res=await Api.post('/api/user/updatePassword',{password:values.password,id:localStorage.getItem('id')||""});
      if (res.code==1) {
        message.success(`${res.msg}`);
        setVis(false);
      }else{
        message.error(`${res.msg}`)
      }
      
    };
  
    const handleCancel = () => {
      setVis(false);
    };
    // 个人中心下拉框渲染
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <UserOutlined />
          <span onClick={handlePassword}> 修改密码 </span>
        </Menu.Item>
        <Menu.Item key="2">
          <LogoutOutlined />
          <span onClick={handelUserCenter}> 退出登录 </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="user">
         
        <Dropdown overlay={menu} placement="bottomCenter" trigger={[ 'click' ]}>
            <div>
              <Avatar shape="square" size="small" style={{ marginLeft: 10}} icon={<UserOutlined />} />
              <span style={{ marginLeft: 10, marginRight: 30 ,color: '#fff'}}>{localStorage.getItem("userName")||userName}</span>
            </div>

        </Dropdown>
        <Modal title="修改密码" visible={vis}   footer={null}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleOk} 
          autoComplete="off"
        >
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="ConPassword"
          rules={[{ required: true, message: '请输入确认密码' }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('请保持两次密码输入一致！'));
              },
            }),]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" className='mr-15'>
            确定
          </Button>
          <Button className='mr-15' onClick={handleCancel}>
            取消
          </Button>    
         </Form.Item>
        </Form>
      </Modal>
      </div>
    );
  }
  
  export default memo(User)