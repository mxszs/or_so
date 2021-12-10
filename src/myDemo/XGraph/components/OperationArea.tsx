import React from 'react';
import { Drawer, Button, Space } from 'antd';
import EventBus from 'or_so/src/myDemo/util/eventBus';
import { CellView, Graph, NodeView, EdgeView } from '@antv/x6';

type OperationAreaType = {
  config: {
    visible: boolean;
    data: CellView.MousePositionEventArgs<any>;
  };
  graph: Graph;
};

const OperationArea: React.FC<OperationAreaType> = ({ config, graph }) => {
  const reset = () => {
    const { view } = config.data;
    if (view instanceof NodeView) {
      view.cell.attr('label/text', 'orange');
    } else if (view instanceof EdgeView) {
      view.cell.setLabels('labels');
    }
    onClose();
  };

  const onClose = () =>
    EventBus.dispatchEvent({
      type: 'config',
      data: { visible: false, data: {} },
    });

  return (
    <Drawer
      title="test"
      width={500}
      visible={config.visible}
      closable={false}
      footer={
        <Space>
          <Button type="primary" onClick={reset}>
            确定
          </Button>
          <Button onClick={onClose}>取消</Button>
        </Space>
      }
      onClose={onClose}
    >
      11111
    </Drawer>
  );
};

export default OperationArea;
