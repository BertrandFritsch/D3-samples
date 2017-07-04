import { Chapter2Action } from './actionTypes';
import ActionTypes from './actionTypes';

export type Chapter2Data = string[][];

export interface State {
  data: Chapter2Data | null
}

const initialState: State = {
  data: null
};

const reducer = (state: State | undefined, action: Chapter2Action): State => {
  const locState = state || initialState;

  switch (action.type) {

    case ActionTypes.DATA_LOADED:
      return { ...locState, data: action.payload };

    default:
      return locState;
  }
};

export default { chapter2: reducer };
