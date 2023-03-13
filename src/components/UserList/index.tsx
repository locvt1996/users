import UserCard from '@components/UserCard';
import type { UserItem } from '@store/users/type';
import { Col, Row } from 'antd';
import { memo } from 'react';

export type UserListProps = {
  data: UserItem[];
};

const UserList: React.FC<UserListProps> = ({ data }: UserListProps) => {
  return (
    <div>
      <Row gutter={[0, 40]}>
        {data.map((item) => (
          <Col key={item.id} md={8} sm={12}>
            <UserCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default memo(UserList);
