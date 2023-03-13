import './Layout.scss';

import ErrorBoundary from '@components/ErrorBoundaries';
import { Layout } from 'antd';
import type { PropsWithChildren } from 'react';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const { Content } = Layout;

const LayoutCustom: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Header />

      <ErrorBoundary>
        <Content className="content">{children}</Content>
      </ErrorBoundary>

      <Footer />
    </Layout>
  );
};

export default LayoutCustom;
