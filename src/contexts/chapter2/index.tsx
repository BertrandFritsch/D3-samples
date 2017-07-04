import Chapter2View from './_module_/Chapter2ViewContainer';
import reducers, { State } from './_module_/reducers';
import sagas from './_module_/sagas';

export type Chapter2State = { chapter2: State };

export default {

  // public interface of the chapter2 context
  components: {
    Chapter2View
  },

  // technical exports
  sagas,
  reducers: { chapter2: reducers }
};
