import { Space } from "antd";
import { memo } from "react";

const NoResultContent: React.FC = () => {
  return (
    <Space
      direction="horizontal"
      style={{ width: "100%", justifyContent: "center" }}
    >
      No results returned
    </Space>
  );
};

export default memo(NoResultContent);
