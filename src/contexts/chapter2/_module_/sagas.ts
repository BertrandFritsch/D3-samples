import { call, put, PutEffect } from 'redux-saga/effects';

import ActionTypes, { Chapter2Action } from './actionTypes';

interface Fact {
  dim: {
    COUNTRY: string,
    REGION: string,
    YEAR: string,
    SEX: string,
    GHO: string,
    PUBLISHSTATE: string
  },
  Value: string
}

interface RawData {
  dimension: Array<{
    label: string,
    display: string
  }>,

  fact: Fact[]
}

// character-typed put function
const chapter2ActionPut = (action: Chapter2Action): PutEffect<Chapter2Action> => put(action);

function* loadData() {

  const rawData: RawData = require('./data/who-gho-life-expectancy.json');

  const data = rawData.fact
                      .filter(d => d.dim.GHO === 'Life expectancy at birth (years)' && d.dim.SEX === 'Both sexes' && d.dim.YEAR === '2014')
                      .map(d => [ d.dim.COUNTRY, d.Value ]);

  yield chapter2ActionPut({ type: ActionTypes.DATA_LOADED, payload: data });
}

/**
 * chapter2 sagas
 */
export default function* () {
  yield [
    call(loadData)
  ];
}
