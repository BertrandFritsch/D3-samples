import { call, put, PutEffect } from 'redux-saga/effects';
import * as d3 from 'd3';

import ActionTypes, { Chapter1Action } from './actionTypes';

interface RawData {
  id: string,
  Region_Code: string,
  Region: string,
  Area_Code: string,
  Area: string,
  Electorate: string,
  ExpectedBallots: string,
  VerifiedBallotPapers: string,
  Pct_Turnout: string,
  Votes_Cast: string,
  Valid_Votes: string,
  Remain: string,
  Leave: string,
  Rejected_Ballots: string,
  No_official_mark: string,
  Voting_for_both_answers: string,
  Writing_or_mark: string,
  Unmarked_or_void: string,
  Pct_Remain: string,
  Pct_Leave: string,
  Pct_Rejected: string
}

// character-typed put function
const chapter1ActionPut = (action: Chapter1Action): PutEffect<Chapter1Action> => put(action);

function* loadData() {

  const data: RawData[] = require('./data/EU-referendum-result-data.csv');

  const regions = data.reduce((last: { [n:string]: RawData[] }, row) => ({
      ...last,
      [ row.Region ]: [ ...(last[row.Region] || []), row ]
    }), {});

  const regionsPctTurnout = Object.keys(regions)
    .map(region => ({
      region,
      meanPctTurnout: d3.mean(regions[region], d => +d.Pct_Turnout) || 0
    }));

  yield chapter1ActionPut({ type: ActionTypes.DATA_LOADED, payload: regionsPctTurnout });
}

/**
 * chapter1 sagas
 */
export default function* () {
  yield [
    call(loadData)
  ];
}
