/**
 * @flow
 */
import * as types from '../actions/actionTypes';
const ACTION_TYPES = Object.freeze({
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
});

type ActionType = $Values<typeof ACTION_TYPES>;

export type IncrementAction = {
  type: ActionType,
};

export type DecrementAction = {
  type: ActionType,
};

export type Action = IncrementAction | DecrementAction;
