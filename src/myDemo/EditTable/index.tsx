import React, { useState, useEffect } from 'react';
import {
  Form,
  Table,
  Input,
  Button,
  Tabs,
  Collapse,
  Row,
  Col,
  Select,
  Space,
} from 'antd';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { TabsProps } from 'antd/lib/tabs';
import { useDynamicList } from 'ahooks';
import { editData } from './testData';

type Props = {};

type Item = {
  name: string;
  age: string;
  id: string;
};

const { TabPane } = Tabs;
const { Item, List } = Form;
const { Panel } = Collapse;

const defaultList = [
  {
    title: '',
    routers: [
      {
        protocolSupport: [{}],
      },
    ],
  },
  {
    title: '',
    routers: [
      {
        protocolSupport: [{}],
      },
    ],
  },
];

const EditTable: React.FC<Props> = () => {
  const [params, setParams] = useState({});
  const [editStatus, setEditStatus] = useState(false);

  const { list, push, remove, getKey, resetList } = useDynamicList(defaultList);

  const [form] = Form.useForm();

  // 提交
  const submit = () => {
    form.validateFields().then(values => {
      console.log(values, 'form');
      const gatewayList: any = [];
      values.gatewayList.forEach((item: any) => {
        item.routers
          .filter(item => item)
          .forEach((wayItem: any) => {
            gatewayList.push({
              zone: item.zone,
              name: wayItem.outsideName,
              host: wayItem.outsideHost,
              routers: {
                protocolSupport: wayItem.protocolSupport,
                type: wayItem.type,
              },
            });
          });
      });
      const params = {
        configKey: 'test',
        param: {
          gatewayList,
        },
      };
      setParams(params);
      console.log(params, 'params');
    });
  };
  // 设置初值
  useEffect(() => {
    if (editStatus) {
      resetList(editData);
      const gatewayList: any = [];
      editData.forEach(item => {
        const routers: any = [];
        item.routers.forEach(routerItem =>
          routers.push({
            ...routerItem,
            outsideName: item.name,
            outsideHost: item.host,
          }),
        );
        console.log(routers, 'routers');
        gatewayList.push({
          zone: item.zone,
          routers,
        });
      });
      form.setFieldsValue({ gatewayList: gatewayList });
    } else {
      form.setFieldsValue({ gatewayList: defaultList });
      resetList(defaultList);
    }
  }, [editStatus]);

  // 添加TabPane
  const addTabPane = () => {
    push({
      title: '',
      routers: [
        {
          protocolSupport: [{}],
        },
      ],
    });

    // 给表单添加默认值
    const values = form.getFieldValue('gatewayList');
    values.push({
      routers: [
        {
          protocolSupport: [{}],
        },
      ],
    });
    form.setFieldsValue({ gatewayList: values });
  };

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 14 },
  };
  const routerItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  return (
    <>
      <Button
        style={{ marginBottom: 8 }}
        type="primary"
        onClick={() => setEditStatus(!editStatus)}
      >
        切换{editStatus ? '新增' : '编辑'}
      </Button>
      <Form {...layout} labelCol={{ span: 2 }} form={form}>
        <Tabs
          type="editable-card"
          hideAdd
          tabBarExtraContent={<Button onClick={addTabPane}>添加</Button>}
        >
          {list.map((item, index) => (
            <TabPane
              forceRender
              key={`${getKey(index)}`}
              closeIcon={<CloseOutlined onClick={() => remove(index)} />}
              tab={`Zone ${getKey(index)}`}
            >
              <Item
                {...layout}
                label="zone"
                name={['gatewayList', getKey(index), 'zone']}
                rules={[
                  {
                    required: true,
                    message: '请填写Zone',
                  },
                ]}
              >
                <Input placeholder="请填写Zone" />
              </Item>
              <List
                {...layout}
                name={['gatewayList', getKey(index), 'routers']}
              >
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((collapseItem, collapseIndex) => (
                      <Collapse
                        style={{ marginBottom: 24 }}
                        defaultActiveKey={[`${collapseItem.fieldKey}`]}
                        key={collapseItem.fieldKey}
                      >
                        <Panel
                          forceRender
                          extra={
                            <CloseOutlined
                              onClick={() => remove(collapseItem.name)}
                            />
                          }
                          header={
                            <Item
                              style={{
                                marginBottom: 0,
                                width: '50%',
                                display: 'inline-flex',
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: '请填写网关名称',
                                },
                              ]}
                              {...routerItemLayout}
                              label="网关名称"
                              name={[collapseItem.name, 'outsideName']}
                              fieldKey={[collapseItem.fieldKey, 'outsideName']}
                            >
                              <Input
                                placeholder="请填写网关名称"
                                onClick={e => e.stopPropagation()}
                                addonBefore="名称"
                              />
                            </Item>
                          }
                          key={`${collapseItem.fieldKey}`}
                        >
                          <Item
                            rules={[
                              {
                                required: true,
                                message: '请填写网关地址',
                              },
                            ]}
                            {...layout}
                            label="网关地址"
                            name={[collapseItem.name, 'outsideHost']}
                            fieldKey={[collapseItem.fieldKey, 'outsideHost']}
                          >
                            <Input placeholder="请填写网关地址" />
                          </Item>
                          <Item
                            style={{ position: 'absolute' }}
                            initialValue="NONE"
                            {...layout}
                            name={[collapseIndex, 'type']}
                          >
                            <Input hidden />
                          </Item>
                          <List
                            {...layout}
                            name={[collapseIndex, 'protocolSupport']}
                          >
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(routerItem => (
                                  <Row
                                    style={{ width: '100%' }}
                                    key={routerItem.key}
                                  >
                                    <Item
                                      style={{ width: '40%' }}
                                      rules={[
                                        {
                                          required: true,
                                          message: '请选择',
                                        },
                                      ]}
                                      {...routerItemLayout}
                                      label="protocol"
                                      fieldKey={[
                                        routerItem.fieldKey,
                                        'protocol',
                                      ]}
                                      name={[routerItem.fieldKey, 'protocol']}
                                    >
                                      <Select>
                                        <Select.Option value="SOFA">
                                          SOFA
                                        </Select.Option>
                                        <Select.Option value="test">
                                          test
                                        </Select.Option>
                                        <Select.Option value="GRPC">
                                          GRPC
                                        </Select.Option>
                                      </Select>
                                    </Item>
                                    <Item
                                      style={{ width: '40%' }}
                                      rules={[
                                        {
                                          required: true,
                                          message: '请填写',
                                        },
                                      ]}
                                      {...routerItemLayout}
                                      label="port"
                                      fieldKey={[routerItem.fieldKey, 'port']}
                                      name={[routerItem.fieldKey, 'port']}
                                    >
                                      <Input />
                                    </Item>
                                    <Item>
                                      <DeleteOutlined
                                        onClick={() => remove(routerItem.name)}
                                      />
                                    </Item>
                                  </Row>
                                ))}
                                <Button
                                  type="dashed"
                                  style={{ marginTop: 8, width: '50%' }}
                                  onClick={() => add()}
                                >
                                  添加
                                </Button>
                              </>
                            )}
                          </List>
                        </Panel>
                      </Collapse>
                    ))}
                    <Button
                      type="dashed"
                      style={{ marginTop: 8, width: '100%' }}
                      onClick={() =>
                        add({
                          protocolSupport: [{}],
                        })
                      }
                    >
                      添加
                    </Button>
                  </>
                )}
              </List>
            </TabPane>
          ))}
        </Tabs>
      </Form>
      <Button
        type="primary"
        style={{ marginTop: 8, width: '100%' }}
        onClick={submit}
      >
        提交
      </Button>
      {Object.keys(params).length > 0 && (
        <pre>{JSON.stringify(params, null, '\t')}</pre>
      )}
    </>
  );
};

export default EditTable;
