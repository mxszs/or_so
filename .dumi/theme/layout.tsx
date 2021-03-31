import React from 'react';
import Layout from 'dumi-theme-default/src/layout';
import { Provider } from 'or_so/src/hooks/useModel';

export default ({ children, ...props }) => (
  <Layout {...(props as any)}>
    <Provider>{children}</Provider>
  </Layout>
);
