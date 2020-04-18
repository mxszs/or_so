import React, { useContext, useState, useEffect } from 'react';
import { Drawer, Form, Input, Button } from 'antd';
import { graphContext } from '../Graph/graphContext';

const setTitleText = {
  node: '节点信息',
  edge: '线条信息',
};

type InitState = {
  visible: boolean;
  title: 'node' | 'edge';
};

const EditGraph = () => {
  const {
    ref: { current: ref },
    state: { current: state },
  } = useContext(graphContext);

  const [form] = Form.useForm();
  const [initState, setInitState] = useState<InitState>({
    visible: false,
    title: 'node',
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
        title: 'node',
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
        title: 'edge',
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
    <Drawer
      title={setTitleText[initState.title]}
      visible={initState.visible}
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
      <Form form={form} initialValues={{ label: '' }}>
        <Form.Item label="Label" shouldUpdate name="label">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
};
export default EditGraph;
