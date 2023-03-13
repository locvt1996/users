import NoResultContent from '@components/NoResultContent';
import UserList from '@components/UserList';
import { ITEM_PER_PAGE } from '@constants';
import useGetUsersData from '@hooks/useGetUsersData';
import { Input, Pagination, Space, Spin } from 'antd';
import { useCallback, useMemo, useState } from 'react';

const HomePage: React.FC = () => {
  const { data, loading } = useGetUsersData();

  const [filter, setFilter] = useState({
    page: 1,
    query: '',
  });

  const dataFilterQuery = useMemo(() => {
    return data.filter((item) => item.login.indexOf(filter.query) !== -1);
  }, [data, filter.query]);

  const dataPerPage = useMemo(() => {
    const page = filter.page;
    if (!page) return [];

    const start = (page - 1) * ITEM_PER_PAGE;
    const end = page * ITEM_PER_PAGE;

    return dataFilterQuery.slice(start, end);
  }, [dataFilterQuery, filter.page]);

  const handleChangeQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((preState) => {
      const { value } = event.target;
      if (preState.query === value) return preState;

      return {
        page: 1,
        query: value,
      };
    });
  }, []);

  const handleChangePage = useCallback((page: number) => {
    setFilter((preState) => ({ ...preState, page }));
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="container">
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input onChange={handleChangeQuery} placeholder="Search User" />

          {dataPerPage.length ? <UserList data={dataPerPage} /> : <NoResultContent />}

          {dataFilterQuery.length > ITEM_PER_PAGE && (
            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
              <Pagination
                current={filter.page}
                onChange={handleChangePage}
                pageSize={ITEM_PER_PAGE}
                total={dataFilterQuery.length}
              />
            </Space>
          )}
        </Space>
      </div>
    </Spin>
  );
};

export default HomePage;
