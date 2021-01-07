import React, { useContext, useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import NodeDrawer from 'or_so/src/components/NodeDrawer';
import { setTitleText } from 'or_so/src/myDemo/EditGraph/EditNode';
import { IEdge } from '@antv/g6/lib/interface/item';
import { InitState } from 'or_so/src/@types/NodeType';
import { graphContext } from '../Graph/graphContext';

interface AddNodeState extends InitState {}

const AddNode = () => {
  const {
    ref: { current: ref },
  } = useContext(graphContext);

  const [form] = Form.useForm();
  const [initState, setInitState] = useState<AddNodeState>({
    visible: false,
    title: 'addNode',
  });
  const [recod, setRecod] = useState<IEdge>({} as IEdge);

  const bindEvent = () => {
    ref.graph.on('edge:click', (ev: any) => {
      const { item, target = {} } = ev;
      const { cfg = {} } = target;
      if (cfg.className === 'addNode') {
        setRecod(item);
        setInitState({
          title: 'addNode',
          visible: true,
        });
      }
    });
  };

  useEffect(() => {
    bindEvent();
  }, []);

  const onFinish = () => {
    form
      .validateFields()
      .then(values => {
        const addId = String(new Date().getTime());
        ref.graph.setAutoPaint(false);
        ref.graph.addItem('node', {
          type: values.type,
          label: values.label,
          id: addId,
        });
        ref.graph.addItem('edge', {
          shape: 'editLine',
          source: recod.getSource().getModel().id,
          label: recod.getModel().label,
          target: addId,
        });
        ref.graph.addItem('edge', {
          shape: 'editLine',
          source: addId,
          target: recod.getTarget().getModel().id,
        });
        ref.graph.removeItem(recod);
        ref.graph.setAutoPaint(true);
        ref.graph.changeData(ref.graph.save());
        setInitState({
          ...initState,
          visible: false,
        });
        form.resetFields();
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  const onClose = () => {
    form.resetFields();
    setInitState({
      ...initState,
      visible: false,
    });
  };
  return (
    <NodeDrawer
      title={setTitleText[initState.title]}
      visible={initState.visible}
      onClose={onClose}
      onFinish={onFinish}
    >
      <Form form={form} initialValues={{ label: '', type: 'baseNode' }}>
        <Form.Item label="Label" shouldUpdate name="label">
          <Input />
        </Form.Item>
        <Form.Item label="Type" shouldUpdate name="type">
          <Select>
            <Select.Option value="baseNode">矩型</Select.Option>
            <Select.Option value="circle">圆形</Select.Option>
            <Select.Option value="diamond">菱形</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </NodeDrawer>
  );
};
export default AddNode;
