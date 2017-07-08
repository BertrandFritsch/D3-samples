import { call, put, PutEffect } from 'redux-saga/effects';

import ActionTypes, { Chapter4Action } from './actionTypes';

// character-typed put function
const chapter4ActionPut = (action: Chapter4Action): PutEffect<Chapter4Action> => put(action);

function* loadData() {

  const data = [
    require('./data/water.json'),
    require('./data/land.json'),
    require('./data/cultural.json')
  ];

  yield chapter4ActionPut({ type: ActionTypes.DATA_LOADED, payload: data });
}

/**
 * chapter4 sagas
 */
export default function* () {
  yield [
    call(loadData)
  ];
}
