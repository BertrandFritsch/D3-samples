import * as React from 'react';
import { Provider } from 'react-redux';

import chapter4 from './contexts/chapter4';

import { Store } from './createStore';

interface Props {
  store: Store;
}

// The UI structure
export default (props: Props) => (
  <Provider store={ props.store }>
    <chapter4.components.Chapter4View />
  </Provider>
);
