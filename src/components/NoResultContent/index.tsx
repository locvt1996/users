import { Space } from 'antd';
import { memo } from 'react';

const NoResultContent: React.FC = () => {
  return (
    <Space className="no-result" direction="horizontal">
      No results returned
    </Space>
  );
};

export default memo(NoResultContent);
