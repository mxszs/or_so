import React from 'react';
import { Divider, Checkbox } from 'antd';

const ToolBar = () => {
  return (
    <div>
      <Checkbox defaultChecked={false}>是否编辑</Checkbox>
      <Divider type="vertical" />
    </div>
  );
};

export default ToolBar;
