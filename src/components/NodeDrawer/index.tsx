import React from 'react';
import { Drawer, Button } from 'antd';
type Props = {
  title?: string;
  visible: boolean;
  onClose: () => void;
  onFinish: () => void;
};

const NodeDrawer: React.FC<Props> = ({
  title,
  visible,
  onClose,
  children,
  onFinish,
}) => {
  return (
    <Drawer
      title={title}
      visible={visible}
      width={500}
      onClose={onClose}
      footer={
        <div
          style={{
            textAlign: 'left',
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            取消
          </Button>
          <Button onClick={onFinish} type="primary">
            确定
          </Button>
        </div>
      }
    >
      {children}
    </Drawer>
  );
};
export default NodeDrawer;
