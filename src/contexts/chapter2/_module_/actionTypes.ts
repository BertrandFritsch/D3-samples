/**
 * All redux actions are events
 */

import { Chapter2Data } from './reducers';

const enum ActionTypes {
  DATA_LOADING = 'DATA_LOADING',
  DATA_LOADED = 'DATA_LOADED'
}

export default ActionTypes;

export type Chapter2Action =
    { type: ActionTypes.DATA_LOADING }
  | { type: ActionTypes.DATA_LOADED, payload: Chapter2Data };

export interface Dispatch<S> {
  (action: Chapter2Action): void;
}
