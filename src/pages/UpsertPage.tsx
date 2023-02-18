import Loading from '@components/Loading';
import UserForm from '@components/UserForm';
import useGetUsersData from '@hooks/useGetUsersData';
import { actions } from '@store/users/';
import { getUserInfo } from '@store/users/selector';
import type { UserItem } from '@store/users/type';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserPage: React.FC = () => {
  const { loading } = useGetUsersData();

  const { userId } = useParams();
  const dispatch = useDispatch();
  const [counterSubmit, setCounterSubmit] = useState<number>(0);
  const userInfo = useSelector(getUserInfo(userId));

  const onSubmit = useCallback(
    (values: UserItem) => {
      dispatch(userId ? actions.updateUser({ ...values, id: userId }) : actions.createUser(values));
      setCounterSubmit((n) => n + 1);
    },
    [userId, dispatch]
  );

  if (loading) return <Loading />;

  return (
    <div>
      <UserForm key={counterSubmit} {...userInfo} onSubmit={onSubmit} />
    </div>
  );
};

export default UserPage;
