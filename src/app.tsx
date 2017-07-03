import * as React from 'react';
import { Provider } from 'react-redux';

import chapter1 from './contexts/chapter1';

import { Store } from './createStore';

interface Props {
  store: Store;
}

// The UI structure
export default (props: Props) => (
  <Provider store={ props.store }>
    <chapter1.components.Chapter1View />
  </Provider>
);
