import React from 'react';
import { Button, Space } from 'antd';
import useSetState from 'or_so/src/hooks/useSetState';

type State = {
  hello: string;
  count: number;
  [key: string]: any;
};

export default () => {
  // const {  } = useModel('init')
  const [state, setState] = useSetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Space>
        <Button onClick={() => setState({ hello: 'hello' })}>say hello</Button>
        <Button onClick={() => setState({ world: 'world' })}>say word</Button>
        <Button onClick={() => setState(prev => ({ count: prev.count + 1 }))}>
          count + 1
        </Button>
      </Space>
    </>
  );
};
