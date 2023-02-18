import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import Footer from "./Footer";
import Header from "./Header";
const { Content } = Layout;

const LayoutCustom: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Header />

      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: "80vh",
        }}
      >
        {children}
      </Content>

      <Footer />
    </Layout>
  );
};

export default LayoutCustom;
