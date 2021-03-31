import React from 'react';

import Dispatcher from './dispatcher';
import Executor from './executor';
import models from 'or_so/src/models';
import Context from './Context';

const dispatcher = new Dispatcher!();

export type Model<T extends keyof typeof models> = {
  [key in keyof typeof models]: ReturnType<typeof models[T]>;
};
const Exe = Executor!;

const Provider: React.FC = ({ children }) => {
  return (
    <Context.Provider value={dispatcher}>
      {Object.keys(models).map(item => (
        <Exe
          key={item}
          namespace={item}
          hook={models[item as keyof typeof models]}
          onUpdate={value => {
            dispatcher.data[item] = value;
            dispatcher.update(item);
          }}
        />
      ))}
      {children}
    </Context.Provider>
  );
};

export default Provider;
