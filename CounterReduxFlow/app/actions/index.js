/**
 * @flow
 */
import * as types from './actionTypes'
import type { Action } from '../types/Action';

export const increment = (): Action => {
  return {
    type: 'HELLO',
  };
}

export const decrement = (): Action => {
  return {
    type: types.DECREMENT,
  };
}

export default {
  increment,
  decrement,
}
