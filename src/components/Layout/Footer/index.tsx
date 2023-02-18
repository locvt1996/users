import { memo } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterCustom: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2023 Created by Ant UE
    </Footer>
  );
};

export default memo(FooterCustom);
