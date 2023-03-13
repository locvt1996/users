import Layout from '@components/Layout';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import UpsertPage from '@pages/UpsertPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<NotFoundPage />} path="*" />
          <Route element={<HomePage />} path="/" />
          <Route element={<UpsertPage key="edit" />} path="users/:userId/edit" />
          <Route element={<UpsertPage key="create" />} path="users/create" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
