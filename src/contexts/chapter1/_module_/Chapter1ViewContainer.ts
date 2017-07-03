import { connect } from 'react-redux';
import { State } from './reducers';
import Chapter1View from './Chapter1View';

export default connect(
  (state: { chapter1: State }) => ({
    data: state.chapter1.data
  }),
  undefined,
  (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
  }))(Chapter1View);
