import React, { useState, forwardRef, useRef, useEffect } from 'react';
import { Form, Radio, Button, InputNumber, Select } from 'antd';
import classnames from 'classnames';
import { test } from './mock';
import styles from './index.less';

interface Props {}

type RenderRadioType = {
  list: { port: string; maxReq: number }[];
  portValue: string;
  ref: any;
  onChange?: () => void;
  getFieldValue?: any;
  changeMaxReq: (index: number) => void;
};

const style = {
  width: 100,
};
const RenderRadio: React.FC<RenderRadioType> = forwardRef(
  ({ list, changeMaxReq, portValue, onChange, getFieldValue }, ref: any) => {
    const [selectValue, setSelectValue] = useState<string | number>(portValue);
    const getPortValue = getFieldValue('port');
    const onSelect = (value: React.ReactText, arr: any) => {
      changeMaxReq(arr.key);
      setSelectValue(value);
    };

    useEffect(() => {
      if (list.findIndex(item => item.port === getPortValue) < 7) {
        setSelectValue(portValue);
      }
    }, [getPortValue]);
    return (
      <>
        <Radio.Group
          onChange={onChange}
          value={getPortValue}
          defaultValue={portValue}
          ref={ref}
          buttonStyle="solid"
        >
          {list
            .filter((item, index) => index < 7)
            .map((item, index) => (
              <Radio.Button
                onClick={() => changeMaxReq(index)}
                key={item.port}
                value={item.port}
              >
                {item.port}
              </Radio.Button>
            ))}
          <Select
            onSelect={onSelect}
            className={classnames({
              [styles.selcetStyle]: list
                .filter((item, index) => index >= 7)
                .map(item => item.port)
                .includes(getPortValue),
              [styles.defaultSelectStyle]: true,
            })}
            value={selectValue}
            style={style}
            onChange={onChange}
          >
            <Select.Option key={0} value={portValue}>
              选择端口
            </Select.Option>
            {list
              .filter((item, index) => index >= 7)
              .map((item, index) => (
                <Select.Option key={index + 7} value={item.port}>
                  {item.port}
                </Select.Option>
              ))}
          </Select>
        </Radio.Group>
      </>
    );
  },
);

const RadioButtonGroup: React.FC<Props> = () => {
  const [value, setValue] = useState({});
  const [form] = Form.useForm();
  const renderRef = useRef<any>(null);
  const onFinish = (values: any) => {
    setValue(values);
  };
  const changeMaxReq = (index: number) => {
    form.setFieldsValue({ maxReq: test[index].maxReq });
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        initialValues={{ port: test[0].port, maxReq: test[0].maxReq }}
        form={form}
      >
        <Form.Item name="port" rules={[{ required: true }]}>
          <RenderRadio
            ref={renderRef}
            getFieldValue={form.getFieldValue}
            portValue={test[0].port}
            list={test}
            changeMaxReq={changeMaxReq}
          />
        </Form.Item>
        <Form.Item name="maxReq">
          <InputNumber />
        </Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form>
      <div>{JSON.stringify(value, null, 2)}</div>
    </>
  );
};

export default RadioButtonGroup;
