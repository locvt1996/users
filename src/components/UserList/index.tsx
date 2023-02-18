import { Col, Row } from "antd";
import { memo } from "react";
import { UserItem } from "../../store/users/type";
import UserCard from "../UserCard";

export type UserListProps = {
  data: UserItem[];
};

const UserList: React.FC<UserListProps> = ({ data }) => {
  return (
    <div>
      <Row gutter={[0, 40]}>
        {data?.map((item) => (
          <Col md={8} sm={12} key={item.id}>
            <UserCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default memo(UserList);
