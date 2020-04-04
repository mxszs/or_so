import React, { useState, forwardRef, useRef } from 'react';
import { Form, Radio, Button, InputNumber, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import classnames from 'classnames';
import { test } from './mock';
import styles from './index.less';

interface Props extends FormComponentProps {}

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
    const onSelect = (_, arr) => {
      changeMaxReq(arr.key);
    };
    return (
      <>
        <Radio.Group
          onChange={onChange}
          value={getFieldValue('port')}
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
                .includes(getFieldValue('port')),
              [styles.defaultSelectStyle]: true,
            })}
            defaultValue={portValue}
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

const RadioButtonGroup: React.FC<Props> = ({ form }) => {
  const [value, setValue] = useState({});
  const {
    getFieldDecorator,
    validateFields,
    setFieldsValue,
    getFieldValue,
  } = form;
  const renderRef = useRef<any>(null);
  const submit = () => {
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
        setValue(values);
      }
    });
  };
  const changeMaxReq = index => {
    setFieldsValue({ ['maxReq']: test[index].maxReq });
  };
  return (
    <>
      <Form>
        <Form.Item>
          {getFieldDecorator('port', {
            initialValue: test[0].port,
          })(
            <RenderRadio
              ref={renderRef}
              getFieldValue={getFieldValue}
              portValue={test[0].port}
              list={test}
              changeMaxReq={changeMaxReq}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('maxReq', {
            initialValue: test[0].maxReq,
          })(<InputNumber />)}
        </Form.Item>
        <Button onClick={submit}>提交</Button>
      </Form>
      <div>{JSON.stringify(value, null, 2)}</div>
    </>
  );
};

export default Form.create<Props>()(RadioButtonGroup);
