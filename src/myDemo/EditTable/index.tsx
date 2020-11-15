import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Tabs, Collapse } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDynamicList } from 'ahooks';
import { editData } from './testData';
import FormList from './FormList';

type AxisItem = {
  row?: string;
  column?: string;
};

type TeamsItem = {
  axis: AxisItem[];
  teamPosition?: string;
  teamName?: string;
  type?: string;
};

type CommonType = {
  title?: string;
  class?: string;
  teamName?: string;
  teamPosition?: string;
  id?: string;
  type?: string;
};

interface ListItem extends CommonType {
  teams: TeamsItem[];
}

interface GradesListItem extends CommonType {
  teams: TeamsItem;
}

type FormValues = {
  grades: ListItem[];
};

const { TabPane } = Tabs;
const { Item, List } = Form;
const { Panel } = Collapse;

const defaultList = [
  {
    title: '',
    teams: [
      {
        axis: [{}],
      },
    ],
  },
  {
    title: '',
    teams: [
      {
        axis: [{}],
      },
    ],
  },
];

const EditForm: React.FC = () => {
  const [params, setParams] = useState({});
  const [editStatus, setEditStatus] = useState<boolean>(false);

  const { list, push, remove, getKey, resetList } = useDynamicList<ListItem>(
    defaultList,
  );

  const [form] = Form.useForm();

  // 提交
  const submit = () => {
    form.validateFields().then(values => {
      console.log(values, 'form');
      const grades: GradesListItem[] = [];
      (values.grades as FormValues['grades']).forEach(item => {
        item.teams
          .filter(item => item)
          .forEach(teamItem => {
            grades.push({
              class: item.class,
              teamName: teamItem.teamName,
              teamPosition: teamItem.teamPosition,
              teams: {
                axis: teamItem.axis,
                type: teamItem.type,
              },
            });
          });
      });
      const params = {
        configKey: 'test',
        param: {
          grades,
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
      const grades: FormValues['grades'] = [];
      editData.forEach(item => {
        const teams: ListItem['teams'] = [];
        item.teams.forEach(routerItem =>
          teams.push({
            ...routerItem,
            teamName: item.teamName,
            teamPosition: item.teamPosition,
          }),
        );
        console.log(teams, 'teams');
        grades.push({
          class: item.class,
          teams,
        });
      });
      form.setFieldsValue({ grades: grades });
    } else {
      form.setFieldsValue({ grades: defaultList });
      resetList(defaultList);
    }
  }, [editStatus]);

  // 添加TabPane
  const addTabPane = () => {
    push({
      title: '',
      teams: [
        {
          axis: [{}],
        },
      ],
    });

    // 给表单添加默认值
    const values = form.getFieldValue('grades');
    values.push({
      teams: [
        {
          axis: [{}],
        },
      ],
    });
    form.setFieldsValue({ grades: values });
  };

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 14 },
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
          {list.map((_, index) => (
            <TabPane
              forceRender
              key={`${getKey(index)}`}
              closeIcon={<CloseOutlined onClick={() => remove(index)} />}
              tab={`班级 ${getKey(index) + 1}`}
            >
              <Item
                {...layout}
                label="班级"
                name={['grades', getKey(index), 'class']}
                rules={[
                  {
                    required: true,
                    message: '请填写班级',
                  },
                ]}
              >
                <Input placeholder="请填写班级" />
              </Item>
              <FormList parentIndex={getKey(index)} />
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

export default EditForm;
