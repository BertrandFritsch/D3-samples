import { Chapter4Action } from './actionTypes';
import ActionTypes from './actionTypes';

export type Chapter4Data = any[];

export interface State {
  data: Chapter4Data | null
}

const initialState: State = {
  data: null
};

const reducer = (state: State | undefined, action: Chapter4Action): State => {
  const locState = state || initialState;

  switch (action.type) {

    case ActionTypes.DATA_LOADED:
      return { ...locState, data: action.payload };

    default:
      return locState;
  }
};

export default { chapter4: reducer };
