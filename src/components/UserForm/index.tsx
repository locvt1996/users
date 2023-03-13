import type { UserItem } from '@store/users/type';
import { Button, Form, Input } from 'antd';
import React, { memo } from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export type UserInfoProps = {
  onSubmit: (value: UserItem) => void;
} & UserItem;

const UserInfo: React.FC<UserInfoProps> = ({ login, bio, location, onSubmit }) => {
  return (
    <Form
      {...layout}
      initialValues={{
        login,
        bio,
        location,
      }}
      name="nest-messages"
      onFinish={onSubmit}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Name" name="login" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Location" name="location">
        <Input />
      </Form.Item>
      <Form.Item label="Bio" name="bio">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(UserInfo);
