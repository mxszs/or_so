import React, { useState, useEffect } from 'react';
import { Form, Table, Input, Button } from 'antd';
import testData from './testData';
type Props = {};

type Item = {
  name: string;
  age: string;
  id: string;
};

type ChildTableProps = {
  dataSource: Item[];
  remove: (index: string) => void;
  addItem: () => void;
};

let keyIndex = 0;
const ChildTable: React.FC<ChildTableProps> = ({
  dataSource,
  remove,
  addItem,
}) => {
  const columns = [
    {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: (name: string, recod: Item, index: number) => (
        <Form.Item name={['params', index, 'name']}>
          <Input />
        </Form.Item>
      ),
    },
    {
      title: '年龄',
      key: 'age',
      dataIndex: 'age',
      render: (age: string, recod: Item, index: number) => (
        <Form.Item name={['params', index, 'age']}>
          <Input />
        </Form.Item>
      ),
    },
    {
      title: '操作',
      key: 'option',
      render: (_: string, recod: Item, index: number) => (
        <Form.Item>
          <a onClick={() => remove(recod.id)}>删除</a>
        </Form.Item>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={(recod: Item) => recod.id}
      />
      <Button
        onClick={addItem}
        style={{ width: '100%', textAlign: 'center' }}
        type="dashed"
      >
        添加+
      </Button>
    </div>
  );
};

const EditTable: React.FC<Props> = () => {
  const [list, setDataSource] = useState<Item[]>([
    {
      age: '22',
      name: 'test',
      id: '001',
    },
  ]);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };

  const remove = (id: string) => {
    const temp = [...list];
    setDataSource(temp.filter(item => item.id !== id));
  };

  const addItem = () => {
    keyIndex += 1;
    const temp = [...list];
    temp.push({
      name: '',
      age: '',
      id: keyIndex.toString(),
    });
    setDataSource(temp);
  };
  return (
    <>
      <Form labelCol={{ span: 2 }} form={form} onFinish={onFinish}>
        <Form.Item label="用户名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input />
        </Form.Item>
        <Form.Item shouldUpdate label="信息">
          <ChildTable
            dataSource={list}
            addItem={addItem}
            remove={(id: string) => remove(id)}
          />
        </Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form>
      {console.log(testData)}
    </>
  );
};
export default EditTable;
