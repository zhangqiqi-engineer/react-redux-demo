import React from 'react';
import { Input, Form, Button,Message ,Select} from 'antd';
import { useNavigate } from 'react-router-dom';
import * as Api from "services/index.js";
import './index.less';

const { Option } = Select;

function Register() {
  const navigate = useNavigate();

  const onFinish = async(values) => {
    const res=await Api.post('/api/register',{userName:values.userName,password:values.password,phone:values.phone,email:values.email,gender:values.gender});
    if(res.state===1){
      Message.success(`${res.msg}`)
    }else{
      Message.error(`${res.msg}`)
    }

    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


    return (
      <div className="registerBox">
      <div className="registerCard">
      <h1>注册</h1>
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
      <Form.Item
        label="确认密码"
        name="ConPassword"
        rules={[{ required: true, message: '请输入密码' }, ({ getFieldValue }) => ({
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
      <Form.Item
        name="phone"
        label="手机号"
        rules={[{ required: true, message: '请输入手机号!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: '请输入正确的邮箱地址!',
          },
          {
            required: true,
            message: '请输入邮箱!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="性别"
        rules={[{ required: true, message: '请选择性别!' }]}
      >
        <Select placeholder="请选择性别">
          <Option value="male">女</Option>
          <Option value="female">男</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
        <Button type="primary" htmlType="submit" className='mr-15' block>
          注册
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 7, span: 15 }}>
         <Button type="link" onClick={()=> navigate('/login')}>登录</Button>(点击这里)
      </Form.Item>

    </Form>
    </div>
    </div>
    );
  }
  
  export default React.memo(Register)