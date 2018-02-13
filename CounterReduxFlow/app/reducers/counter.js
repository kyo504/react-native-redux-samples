/**
 * @flow
 */
import * as types from '../actions/actionTypes';
import type { Action } from '../types/Action';

type State = number;

export default (state: State = 0, action: Action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
