import { useCallback, useState } from "react";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../store/users/selector";
import { UserItem } from "../store/users/type";
import { useDispatch, useSelector } from "react-redux";
import useGetUsersData from "../hooks/useGetUsersData";
import Loading from "../components/Loading";
import { actions } from "../store/users/";

const UserPage: React.FC = () => {
  const { loading } = useGetUsersData();

  const { userId } = useParams();
  const dispatch = useDispatch();
  const [counterSubmit, setCounterSubmit] = useState<number>(0);
  const userInfo = useSelector(getUserInfo(userId));

  const onSubmit = useCallback(
    (values: UserItem) => {
      dispatch(
        userId
          ? actions.updateUser({ ...values, id: userId })
          : actions.createUser(values)
      );
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
