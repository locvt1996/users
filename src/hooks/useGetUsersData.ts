import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../store/users/service";
import { getUsersData } from "../store/users/selector";
import { useSelector } from "react-redux";

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
