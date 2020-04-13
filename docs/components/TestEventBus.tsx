import React from 'react';
import { Button } from 'antd';
import EventBus from '@/myDemo/util/eventBus';
import { debounce, throttle } from '@/myDemo/util';

const Test = () => {
  let i = 1;
  const emitMyevent1 = (type: number) => {
    EventBus.dispatchEvent({ type: 'myevent1', a: { test: type } });
  };

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        事件一：
        <Button.Group>
          <Button onClick={() => debounce(() => emitMyevent1((i += 1)), 800)}>
            防抖触发+
          </Button>
          <Button onClick={() => throttle(() => emitMyevent1((i -= 1)), 800)}>
            节流触发-
          </Button>
        </Button.Group>
      </div>
      <div>
        事件二：
        <Button.Group>
          <Button
            onClick={() => EventBus.dispatchEvent({ type: 'myevent2' }, true)}
          >
            触发完成后销毁
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};
export default Test;
