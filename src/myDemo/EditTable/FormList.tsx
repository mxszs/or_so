import React from 'react';
import { Form, Input, Button, Collapse, Row, Select } from 'antd';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';

type Props = {
  parentIndex: number;
};

type AxisFormListProps = {
  parentIndex: number;
  collapseIndex: number;
};

type AxisItem = {
    row: string;
    column: string;
}

const { Item, List } = Form;
const { Panel } = Collapse;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 14 },
};
const routerItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};



const AxisFormList: React.FC<AxisFormListProps> = ({
  parentIndex,
  collapseIndex,
}) => {
  return (
    <List {...layout} name={[collapseIndex, 'axis']}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(routerItem => (
            <Row style={{ width: '100%' }} key={routerItem.key}>
              <Item
                style={{ width: '40%' }}
                rules={[
                  {
                    required: true,
                    message: '请选择',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                        // 自定义校验名称重复
                        if (!value) {
                            return Promise.resolve();
                        }
                      const axis = getFieldValue([
                          'grades',
                      parentIndex,
                      'teams',
                      collapseIndex,
                      'axis']).map((item: AxisItem) => item.row) as string[];
                      const index = axis.findIndex(item => item === value)
                      axis.splice(index, 1)
                      let infoPromise = Promise.resolve();
                      axis.forEach((checkItem: string) => {
                          if (checkItem === value) {
                            infoPromise = Promise.reject('排名称重复');
                          }
                      })
                      return infoPromise;
                    },
                  }),
                ]}
                {...routerItemLayout}
                label="排"
                initialValue=""
                fieldKey={[routerItem.fieldKey, 'row']}
                name={[routerItem.fieldKey, 'row']}
              >
                <Select>
                  <Select.Option value="one">第一排</Select.Option>
                  <Select.Option value="two">第二排</Select.Option>
                  <Select.Option value="three">第三排</Select.Option>
                </Select>
              </Item>
              <Item shouldUpdate noStyle>
                {({ getFieldValue }) => {
                  const getDefaultValue =
                    getFieldValue([
                      'grades',
                      parentIndex,
                      'teams',
                      collapseIndex,
                      'axis',
                      routerItem.fieldKey,
                      'row',
                    ]) === 'three';
                  return (
                    <Item
                      style={{ width: '40%' }}
                      rules={[
                        {
                          required: !getDefaultValue && true,
                          message: '请填写',
                        },
                      ]}
                      {...routerItemLayout}
                      label="列"
                      fieldKey={[routerItem.fieldKey, 'column']}
                      name={[routerItem.fieldKey, 'column']}
                    >
                      <Input
                        disabled={getDefaultValue}
                      />
                    </Item>
                  );
                }}
              </Item>
              <Item>
                <DeleteOutlined onClick={() => remove(routerItem.name)} />
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
  );
};

const FormList: React.FC<Props> = ({ parentIndex }) => {
  return (
    <List {...layout} name={['grades', parentIndex, 'teams']}>
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
                  <CloseOutlined onClick={() => remove(collapseItem.name)} />
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
                        message: '请填写小组名称',
                      },
                    ]}
                    {...routerItemLayout}
                    label="小组名称"
                    name={[collapseItem.name, 'teamName']}
                    fieldKey={[collapseItem.fieldKey, 'teamName']}
                  >
                    <Input
                      placeholder="请填写小组名称"
                      onClick={e => e.stopPropagation()}
                      addonBefore="小组名称"
                    />
                  </Item>
                }
                key={`${collapseItem.fieldKey}`}
              >
                <Item
                  rules={[
                    {
                      required: true,
                      message: '请填写小组位置',
                    },
                  ]}
                  {...layout}
                  label="小组位置"
                  name={[collapseItem.name, 'teamPosition']}
                  fieldKey={[collapseItem.fieldKey, 'teamPosition']}
                >
                  <Input placeholder="请填写小组位置" />
                </Item>
                <Item
                  style={{ position: 'absolute' }}
                  initialValue="NONE"
                  {...layout}
                  name={[collapseIndex, 'type']}
                >
                  <Input hidden />
                </Item>
                <AxisFormList
                  parentIndex={parentIndex}
                  collapseIndex={collapseIndex}
                />
              </Panel>
            </Collapse>
          ))}
          <Button
            type="dashed"
            style={{ marginTop: 8, width: '100%' }}
            onClick={() =>
              add({
                axis: [{}],
              })
            }
          >
            添加
          </Button>
        </>
      )}
    </List>
  );
};

export default FormList;
