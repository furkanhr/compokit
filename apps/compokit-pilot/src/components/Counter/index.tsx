import { createStatefulComponent } from '@compokit/chef';
import { Layout, Space, Typography } from 'antd';

import { CounterInput, CounterInputAdjustable } from './partials';
import type { Props, Store } from './types';
import { store } from './store';

const { Title } = Typography;

export const Counter = createStatefulComponent<Store, Props>(
  store,
  ({ title }) => (
    <>
      <Title>{title}</Title>

      <Space direction="vertical" size={24}>
        <Layout>
          <CounterInput />
        </Layout>

        <CounterInputAdjustable />
      </Space>
    </>
  )
);
