import { connect } from 'react-redux';
import { State } from './reducers';
import Chapter2View from './Chapter2View';

export default connect(
  (state: { chapter2: State }) => ({
    data: state.chapter2.data
  }),
  undefined,
  (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
  }))(Chapter2View);
