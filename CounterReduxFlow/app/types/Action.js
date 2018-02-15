/**
 * @flow
 */
import * as types from '../actions/actionTypes';

// https://github.com/facebook/flow/issues/627#issuecomment-363612711
const ACTION_TYPES = Object.freeze(types);

type ActionType = $Values<typeof ACTION_TYPES>;

export type IncrementAction = {
  type: ActionType,
};

export type DecrementAction = {
  type: ActionType,
};

export type Action = IncrementAction | DecrementAction;
