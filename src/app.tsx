import * as React from 'react';
import { Provider } from 'react-redux';

import googleMaps from './contexts/googleMaps';

import { Store } from './createStore';

interface Props {
  store: Store;
}

// The UI structure
export default (props: Props) => (
  <Provider store={ props.store }>
    <googleMaps.components.GoogleMapsSVGView />
  </Provider>
);
