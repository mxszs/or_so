import React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';

interface FormConfigProps extends FormItemProps {
  children: React.ReactNode;
}

const FormShare: React.FC = () => {
  const [form] = Form.useForm();

  const formConfig: FormConfigProps[] = [
    {
      name: 'id1',
      label: 'xx1',
      rules: [
        {
          required: true,
          whitespace: true,
          message: 'xxxx',
        },
      ],
      required: true,
      children: <Input />,
    },
    {
      name: 'id2',
      label: 'xx2',
      rules: [],
      required: false,
      children: <Input />,
    },
  ];

  return (
    <Form layout="vertical" form={form}>
      {formConfig.map(item => (
        <Form.Item {...item} />
      ))}
    </Form>
  );
};
export default FormShare;
