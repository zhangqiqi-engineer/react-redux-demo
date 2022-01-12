import { Button, Form, Modal, Select, Space, message,Input } from 'antd';

import React, { memo, useEffect, useState } from 'react';
import * as Api from "services/index.js";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const { Option } = Select;
const FreModal = props => {
  const { visible, onClose, refresh, detial, isNew } = props;
  console.log("detial",detial)
  const [ form ] = Form.useForm();
  const [ loading, setLoading ] = useState(false);

  const addChannel=async(params)=> {
    const obj = {
    ...params,
    };
    try {
      setLoading(true);
      const res = await Api.post('/api/employee/add',obj);
      if (res.code==1) {
        message.success(`${res.msg}`);
        onClose();
        refresh();
      }else{
        message.error(`${res.msg}`)
      }
    } finally {
      setLoading(false);
    }
  }

  const updateChannel=async(params)=>{
    const obj = {
    ...params,
    id:detial.id,
    };
      
    try {
      setLoading(true);
      const res = await Api.post('/api/employee/update',obj);
      if (res.code==1) {
        message.success(`${res.msg}`);
        onClose();
        refresh();
      }else{
        message.error(`${res.msg}`)

      }
    } finally {
      setLoading(false);
    }

  }
  const handleOnFinish=(values)=> {
    
    isNew?addChannel(values):updateChannel(values);
  }

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };
  useEffect(() => {
    if (isNew) {
      form.resetFields();
    } else {
      form.setFieldsValue({ ...detial });
    }
  }, [ isNew, visible ]);


  return (
    <Modal
      title={isNew ? '新增用户' : '编辑用户'}
      width={500}
      maskClosable={false}
      forceRender
      destroyOnClose
      visible={visible}
      onCancel={handleCancel}
      footer={null}>
      <Form
        {...formLayout}
        onFinish={handleOnFinish}
        form={form}
      >
        <Form.Item
        label="用户名"
        name="userName"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="手机号"
        rules={[{ required: true, message: '请输入手机号!' }]}
      >
        <Input  style={{ width: '100%' }} />
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
          <Option value="man">男</Option>
          <Option value="woman">女</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          <Space>
            <Button onClick={() => onClose()}>
                取消
            </Button>
            <Button type={'primary'} htmlType={'submit'} loading={loading}>
                确定
            </Button>
          </Space>
        </Form.Item>
      </Form>


    </Modal>
  );
};


export default memo(FreModal);
