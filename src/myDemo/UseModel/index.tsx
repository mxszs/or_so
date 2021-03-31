import React from 'react';
import { Button, Space } from 'antd';
import { useModel } from 'or_so/src/hooks/useModel';

export default () => {
  const { count, plusCount, reduceCount } = useModel('init');

  return (
    <Space direction="vertical">
      <Button type="primary">{count}</Button>
      <Space>
        <Button onClick={() => plusCount()}>添加</Button>
        <Button onClick={() => reduceCount()}>删减</Button>
      </Space>
    </Space>
  );
};
