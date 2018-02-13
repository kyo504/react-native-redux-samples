/** 
 * @flow
*/
import * as types from '../actions/actionTypes'

export type IncrementAction = {
  type: 'INCREMENT',
};

export type DecrementAction = {
  type: 'DECREMENT',
};

export type Action = IncrementAction | DecrementAction;
