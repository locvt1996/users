import UserForm from '@components/UserForm';
import useActions from '@hooks/useActions';
import useGetUsersData from '@hooks/useGetUsersData';
import { actions } from '@store/users/';
import { getUserInfo } from '@store/users/selector';
import type { UserItem } from '@store/users/type';
import { Spin } from 'antd';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserPage: React.FC = () => {
  const { userId } = useParams();
  const [counterSubmit, setCounterSubmit] = useState<number>(0);

  const { loading } = useGetUsersData();
  const { updateUserAction, createUserAction } = useActions(actions);

  const userInfo = useSelector(getUserInfo(userId));

  const onSubmit = useCallback(
    (values: UserItem) => {
      userId ? updateUserAction({ ...values, id: userId }) : createUserAction(values);

      setCounterSubmit((n) => n + 1);
    },
    [createUserAction, updateUserAction, userId]
  );

  return (
    <Spin spinning={loading}>
      <UserForm key={counterSubmit} {...userInfo} onSubmit={onSubmit} />
    </Spin>
  );
};

export default UserPage;
