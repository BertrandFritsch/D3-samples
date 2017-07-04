import * as React from 'react';
import { Provider } from 'react-redux';

import chapter2 from './contexts/chapter2';

import { Store } from './createStore';

interface Props {
  store: Store;
}

// The UI structure
export default (props: Props) => (
  <Provider store={ props.store }>
    <chapter2.components.Chapter2SVGView />
  </Provider>
);
