import { Button, Form, InputNumber, Modal, Select, Space, message,Input } from 'antd';

import React, { memo, useEffect, useState } from 'react';

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const { Option } = Select;
const FreModal = props => {
  const { visible, onClose, refresh, detial, isNew } = props;
  const [ form ] = Form.useForm();
  const [ loading, setLoading ] = useState(false);

//   async function addChannel(params) {
//     const obj = {
//       riskCount: isNew ? JSON.stringify({ ...params, interval: 'm' }) : JSON.stringify({ ...params, id: detial.id, interval: 'm' }),
//       appName: localStorage.getItem('appName'),
//       modifyType: isNew ? 'c' : 'u',
//       operType: 'riskCount',
//     };
//     try {
//       setLoading(true);
//       const data = await request.policyMan.getPolicyAdd(obj);
//       if (data) {
//         message.success('添加成功');
//         onClose();
//         refresh();
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

  function handleOnFinish(values) {
    // addChannel(values);
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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
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
