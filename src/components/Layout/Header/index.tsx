import { HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderCustom: React.FC = () => {
  const navigation = useNavigate();

  const getDefaultSelection = useMemo(() => {
    switch (window.location.pathname) {
      case '/users/create':
        return 'create-user';
      default:
        return 'home';
    }
  }, []);

  return (
    <Header>
      <Menu
        defaultSelectedKeys={[getDefaultSelection]}
        items={[
          {
            key: 'home',
            label: 'Home',
            icon: <HomeOutlined />,
            onClick: () => navigation('/'),
          },
          {
            key: 'create-user',
            label: 'Create User',
            icon: <UserAddOutlined />,
            onClick: () => navigation('/users/create'),
          },
        ]}
        mode="horizontal"
        theme="dark"
      />
    </Header>
  );
};

export default memo(HeaderCustom);
