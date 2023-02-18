import { Layout } from 'antd';
import { memo } from 'react';

const { Footer } = Layout;

const FooterCustom: React.FC = () => {
  return <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UE</Footer>;
};

export default memo(FooterCustom);
