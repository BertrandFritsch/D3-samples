import { connect } from 'react-redux';
import { State } from './reducers';
import Chapter4View from './Chapter4View';

export default connect(
  (state: { chapter4: State }) => ({
    data: state.chapter4.data
  }),
  undefined,
  (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
  }))(Chapter4View);
