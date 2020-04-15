import React, { useContext, useState } from 'react';
import { Divider, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { graphContext } from '../Graph/graphContext';

const ToolBar = () => {
  const {
    ref: { current: ref },
    state: { current: initState },
  } = useContext(graphContext);
  const [isEdit, setEdit] = useState(initState.isEdit);
  const changeEdit = (e: CheckboxChangeEvent) => {
    setEdit(e.target.checked);
    initState.isEdit = e.target.checked;
    ref.graph.refresh();
  };
  return (
    <div>
      <Checkbox onChange={changeEdit} checked={isEdit} defaultChecked={false}>
        是否编辑
      </Checkbox>
      <Divider type="vertical" />
    </div>
  );
};

export default ToolBar;
