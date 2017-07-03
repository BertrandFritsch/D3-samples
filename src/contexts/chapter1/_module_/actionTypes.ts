/**
 * All redux actions are events
 */

import { Chapter1Data } from './reducers';

const enum ActionTypes {
  DATA_LOADING = 'DATA_LOADING',
  DATA_LOADED = 'DATA_LOADED'
}

export default ActionTypes;

export type Chapter1Action =
    { type: ActionTypes.DATA_LOADING }
  | { type: ActionTypes.DATA_LOADED, payload: Chapter1Data };

export interface Dispatch<S> {
  (action: Chapter1Action): void;
}
