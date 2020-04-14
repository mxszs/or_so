import React, { useContext } from 'react';
import { Divider, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { graphContext } from '../Graph/graphContext';

const ToolBar = () => {
  const { state: {
    current: initState
  } } = useContext(graphContext)

  const changeEdit = (e:CheckboxChangeEvent) => {
    initState.setIsEdit(e.target.checked)
  }
  return (
    <div>
      <Checkbox onChange={changeEdit} defaultChecked={false}>是否编辑</Checkbox>
      <Divider type="vertical" />
    </div>
  );
};

export default ToolBar;
