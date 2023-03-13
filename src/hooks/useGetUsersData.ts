import { getUsersData } from '@store/users/selector';
import { getUsers } from '@store/users/service';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useActions from './useActions';

const useGetUsersData = () => {
  const dispatch = useDispatch();
  const { getUsersAction } = useActions({ getUsers });
  const { loading, data, error, loaded } = useSelector(getUsersData);

  useEffect(() => {
    if (!loaded) {
      getUsersAction();
    }
  }, [dispatch, getUsersAction, loaded]);

  return { loading, data, error, loaded };
};

export default useGetUsersData;
