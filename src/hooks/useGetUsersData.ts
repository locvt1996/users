import { getUsersData } from '@store/users/selector';
import { getUsers } from '@store/users/service';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetUsersData = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(getUsersData);

  useEffect(() => {
    if (!data.length) {
      dispatch(getUsers());
    }
  }, [dispatch, data]);

  return { loading, data, error };
};

export default useGetUsersData;
