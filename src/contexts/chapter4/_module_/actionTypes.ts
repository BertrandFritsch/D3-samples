/**
 * All redux actions are events
 */

import { Chapter4Data } from './reducers';

const enum ActionTypes {
  DATA_LOADING = 'DATA_LOADING',
  DATA_LOADED = 'DATA_LOADED'
}

export default ActionTypes;

export type Chapter4Action =
    { type: ActionTypes.DATA_LOADING }
  | { type: ActionTypes.DATA_LOADED, payload: Chapter4Data };

export interface Dispatch<S> {
  (action: Chapter4Action): void;
}
