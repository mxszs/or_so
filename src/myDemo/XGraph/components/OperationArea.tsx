import React, { useEffect } from 'react';
import { Drawer, Button, Space, Form, Input, Select } from 'antd';
import EventBus from 'or_so/src/myDemo/util/eventBus';
import { CellView, Graph, NodeView, EdgeView } from '@antv/x6';
import { ports } from '../utils/register';

type OperationAreaType = {
  config: {
    visible: boolean;
    data: CellView.MousePositionEventArgs<any>;
  };
  graph: Graph;
};

const typeMap = {
  'custom-rect': '过程',
  'custom-circle': '链接',
};

const OperationArea: React.FC<OperationAreaType> = ({ config, graph }) => {
  const [form] = Form.useForm();

  const reset = async () => {
    const value = await form.validateFields();
    const { view } = config.data;
    if (view instanceof NodeView) {
      view.cell.setAttrs({
        label: { text: value.label },
      });
    }
    if (view instanceof EdgeView) {
      const sourceBox = view.sourceView?.cell.getBBox();
      const targetBox = view.targetView?.cell.getBBox();
      const newNode = graph.addNode({
        shape: value.type,
        x: sourceBox?.x,
        y: (sourceBox?.y + targetBox?.y) / 2,
        attrs: {
          label: {
            text: typeMap[value.type],
          },
          ports: ports,
        },
      });
      view.graph.addEdge({
        source: { cell: view.sourceView?.cell, port: 'bottom' },
        target: { cell: newNode, port: 'top' },
        shape: 'custom-edge',
      });
      view.graph.addEdge({
        source: { cell: newNode, port: 'bottom' },
        target: { cell: view.targetView?.cell, port: 'top' },
        shape: 'custom-edge',
      });
      view.graph.removeEdge(view.cell);
    }
    onClose();
  };

  const onClose = () => {
    form.resetFields();
    EventBus.dispatchEvent({
      type: 'config',
      data: { visible: false, data: {} },
    });
  };

  useEffect(() => {
    let label = '';
    if (config.data.view instanceof NodeView) {
      label = config.data?.view.cell?.attrs?.label?.text;
    }
    form.setFieldsValue({
      label,
    });
  }, [config.data]);

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
      <Form form={form} initialValues={{ label: '' }}>
        {config.data.view instanceof NodeView ? (
          <>
            <Form.Item label="Label" shouldUpdate name="label">
              <Input />
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item
              initialValue="custom-rect"
              label="图形"
              shouldUpdate
              name="type"
            >
              <Select>
                <Select.Option value="custom-rect">过程</Select.Option>
                <Select.Option value="custom-circle">链接</Select.Option>
              </Select>
            </Form.Item>
          </>
        )}
      </Form>
    </Drawer>
  );
};

export default OperationArea;
