import React from 'react';
import { Button } from 'antd';
import EventBus from 'or_so/src/myDemo/util/eventBus';

const Test = () => {
  const [state, setState] = React.useState();
  const fntest1 = React.useCallback(evt => setState(evt), []);

  const fntest2 = React.useCallback(evt => alert(JSON.stringify(evt)), []);

  React.useEffect(() => {
    EventBus.addEventListener('myevent1', fntest1);
    EventBus.addEventListener('myevent2', fntest2);
    return () => {
      EventBus.removeEventListener('myevent1', fntest1);
      EventBus.removeEventListener('myevent2', fntest2);
    };
  }, []);

  const removeventFn = (type: string, fn: (value: any) => void) => {
    EventBus.removeEventListener(type, fn);
  };

  return (
    <div>
      <Button
        style={{ marginRight: 8 }}
        onClick={() => removeventFn('myevent1', fntest1)}
      >
        移除事件一
      </Button>
      <Button onClick={() => removeventFn('myevent2', fntest2)}>
        移除事件二
      </Button>
      <div>{state?.a?.test || '-'}</div>
    </div>
  );
};
export default Test;
