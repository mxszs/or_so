import React from 'react';
import { Button } from 'antd';
import useSetState from 'or_so/src/hooks/useSetState';

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}

export default () => {
  const [state, setState] = useSetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <Button onClick={() => setState({ hello: 'world' })}>set hello</Button>
        <Button
          onClick={() => setState({ foo: 'bar' })}
          style={{ margin: '0 8px' }}
        >
          set foo
        </Button>
        <Button onClick={() => setState(prev => ({ count: prev.count + 1 }))}>
          count + 1
        </Button>
      </p>
    </div>
  );
};
