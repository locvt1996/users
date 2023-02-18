import { memo } from "react";
import { UserItem } from "../../store/users/type";
import React from "react";
import { Button, Form, Input } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export type UserInfoProps = {
  onSubmit: (value: UserItem) => void;
} & UserItem;

const UserInfo: React.FC<UserInfoProps> = ({
  login,
  bio,
  location,
  onSubmit,
}) => {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onSubmit}
      style={{ maxWidth: 600 }}
      initialValues={{
        login,
        bio,
        location,
      }}
    >
      <Form.Item
        name="login"
        label="Name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="location" label="Location">
        <Input />
      </Form.Item>
      <Form.Item name="bio" label="Bio">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(UserInfo);
