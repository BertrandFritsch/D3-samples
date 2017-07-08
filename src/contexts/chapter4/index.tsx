import Chapter4View from './_module_/Chapter4ViewContainer';
import reducers, { State } from './_module_/reducers';
import sagas from './_module_/sagas';

export type Chapter4State = { chapter4: State };

export default {

  // public interface of the chapter4 context
  components: {
    Chapter4View
  },

  // technical exports
  sagas,
  reducers: { chapter4: reducers }
};
