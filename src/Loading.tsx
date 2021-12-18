import React from 'react';
import { Spin } from 'antd';
export default () => {
  return (
    <div style={{ width: 100, margin: '0 auto' }}>
      <Spin tip="加载中。。。" />
    </div>
  );
};
