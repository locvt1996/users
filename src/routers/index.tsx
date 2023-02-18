import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import UpsertPage from "../pages/UpsertPage";

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="users/:userId/edit"
            element={<UpsertPage key="edit" />}
          />
          <Route path="users/create" element={<UpsertPage key="create" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
