import Chapter2View from './_module_/Chapter2ViewContainer';
import Chapter2SVGView from './_module_/Chapter2SVGView';
import reducers, { State } from './_module_/reducers';
import sagas from './_module_/sagas';

export type Chapter2State = { chapter2: State };

export default {

  // public interface of the chapter2 context
  components: {
    Chapter2View,
    Chapter2SVGView
  },

  // technical exports
  sagas,
  reducers: { chapter2: reducers }
};
