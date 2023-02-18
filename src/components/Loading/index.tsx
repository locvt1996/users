import './Loading.css';

import { Spin } from 'antd';
import { memo } from 'react';

const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <Spin />
    </div>
  );
};

export default memo(Loading);
