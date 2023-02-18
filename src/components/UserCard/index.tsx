import { Card } from "antd";
import { EditOutlined, DeleteFilled } from "@ant-design/icons";

import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { UserItem } from "../../store/users/type";
import { actions as usersAction } from "../../store/users";
import { useDispatch } from "react-redux";
import "./UserCard.css";

export type UserCardProps = {} & UserItem;

const UserCard: React.FC<UserCardProps> = (props) => {
  const dispatch = useDispatch();
  const { login, id, avatar_url, url } = props;
  const { Meta } = Card;

  const handleDelete = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      dispatch(usersAction.deleteUser(id));
      event.preventDefault();
    },
    [id, dispatch]
  );

  return (
    <Card
      hoverable
      className="user-card"
      cover={<img alt={login} className="user-card__image" src={avatar_url} />}
      actions={[
        <Link to={`users/${id}/edit`}>
          <EditOutlined key="edit" />
        </Link>,
        <DeleteFilled key="delete" onClick={handleDelete} />,
      ]}
    >
      <Meta title={login} description={url} />
    </Card>
  );
};

export default memo(UserCard);
