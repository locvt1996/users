import React, { useMemo, memo } from "react";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderCustom: React.FC = () => {
  const navigation = useNavigate();

  const getDefaultSelection = useMemo(() => {
    switch (window.location.pathname) {
      case "/users/create":
        return "create-user";
      default:
        return "home";
    }
  }, []);

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[getDefaultSelection]}
        items={[
          {
            key: "home",
            label: "Home",
            icon: <HomeOutlined />,
            onClick: () => navigation("/"),
          },
          {
            key: "create-user",
            label: "Create User",
            icon: <UserAddOutlined />,
            onClick: () => navigation("/users/create"),
          },
        ]}
      />
    </Header>
  );
};

export default memo(HeaderCustom);
