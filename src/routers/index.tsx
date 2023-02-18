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
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='users/:userId/edit' element={<UpsertPage key='edit' />} />
          <Route path='users/create' element={<UpsertPage key='create' />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
