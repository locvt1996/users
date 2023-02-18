import { Spin } from "antd";
import { memo } from "react";

import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <Spin />
    </div>
  );
};

export default memo(Loading);
