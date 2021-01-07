import React, { useContext, useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import NodeDrawer from 'or_so/src/components/NodeDrawer';
import { graphContext } from '../Graph/graphContext';
import { InitState } from 'or_so/src/@types/NodeType';
import { setTitleText } from 'or_so/src/myDemo/EditGraph/EditNode';

interface EditGraphInitState extends InitState {}

const EditGraph = () => {
  const {
    ref: { current: ref },
    state: { current: state },
  } = useContext(graphContext);

  const [form] = Form.useForm();
  const [initState, setInitState] = useState<EditGraphInitState>({
    visible: false,
    title: 'editNode',
  });
  const [racod, setRacod] = useState({});

  const bindEvent = () => {
    ref.graph.on('node:click', (ev: any) => {
      const { item } = ev;
      // 编辑模式下不允许编辑label
      if (state.isEdit) {
        return;
      }
      setRacod(item);
      setInitState({
        visible: true,
        title: 'editNode',
      });
      form.setFieldsValue({ label: item.getModel().label });
    });
    ref.graph.on('edge:click', (ev: any) => {
      const { item, target } = ev;
      const { cfg = {} } = target;
      // 编辑模式下不允许编辑label
      if (cfg.className === 'addNode' || state.isEdit) {
        return;
      }
      setInitState({
        visible: true,
        title: 'editEdge',
      });
      setRacod(item);
      form.setFieldsValue({ label: item.getModel().label });
    });
  };

  useEffect(() => {
    bindEvent();
  }, []);

  const onFinish = () => {
    form
      .validateFields()
      .then(values => {
        ref.graph.updateItem(racod, {
          label: values.label,
        });
        setInitState({
          ...initState,
          visible: false,
        });
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
      <Form form={form} initialValues={{ label: '' }}>
        <Form.Item label="Label" shouldUpdate name="label">
          <Input />
        </Form.Item>
      </Form>
    </NodeDrawer>
  );
};
export default EditGraph;
