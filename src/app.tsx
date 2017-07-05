import * as React from 'react';
import { Provider } from 'react-redux';

import chapter3 from './contexts/chapter3';

import { Store } from './createStore';

interface Props {
  store: Store;
}

// The UI structure
export default (props: Props) => (
  <Provider store={ props.store }>
    <chapter3.components.Chapter3SVGView />
  </Provider>
);
