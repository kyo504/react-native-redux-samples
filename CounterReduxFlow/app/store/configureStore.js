/**
 * @flow
 */
import { createStore } from 'redux';

import reducers from '../reducers'
import type { Store } from '../types/Store';

export default function configureStore(): Store {
  return createStore(reducers);
}
