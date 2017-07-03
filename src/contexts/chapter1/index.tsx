import Chapter1View from './_module_/Chapter1ViewContainer';
import reducers, { State } from './_module_/reducers';
import sagas from './_module_/sagas';

export type Chapter1State = { chapter1: State };

export default {

  // public interface of the chapter1 context
  components: {
    Chapter1View
  },

  // technical exports
  sagas,
  reducers: { chapter1: reducers }
};
