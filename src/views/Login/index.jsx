import React from 'react';
import { Input, Form, Button,Checkbox,Message } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as Api from "services/index.js";

import './index.less';
function Login() {
  const navigate = useNavigate();
  const onFinish = async(values) => {
    const res=await Api.post('/api/login',{userName:values.userName,password:values.password});
    console.log("res",res)
    if(res.code==1){
      navigate('/');
      localStorage.setItem("token",res.data.token);
    }else{
      Message.error(`${res.msg}`)
    }

    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


    return (
      <div className="loginBox">
      <div className="loginCard">
      <h1>登录</h1>
       <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="用户名"
        name="userName"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="记住我" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit" className='mr-15'>
          登录
        </Button>
        还没有注册? 点击这里去 <Button type="link" onClick={()=> navigate('/register')}>注册</Button>
      </Form.Item>

    </Form>
    </div>
    </div>
    );
  }
  
  export default React.memo(Login)