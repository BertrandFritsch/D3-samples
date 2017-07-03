import { Chapter1Action } from './actionTypes';
import ActionTypes from './actionTypes';

export interface Chapter1Item {
  region: string,
  meanPctTurnout: number
}

export type Chapter1Data = Chapter1Item[];

export interface State {
  data: Chapter1Data | null
}

export interface Chapter1State {
  chapter1s: State;
}

const initialState: State = {
  data: null
};

const reducer = (state: State | undefined, action: Chapter1Action): State => {
  const locState = state || initialState;

  switch (action.type) {

    case ActionTypes.DATA_LOADED:
      return { ...locState, data: action.payload };

    default:
      return locState;
  }
};

export default { chapter1: reducer };
