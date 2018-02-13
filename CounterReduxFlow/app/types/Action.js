/** 
 * @flow
*/

export type IncrementAction = {
  type: 'INCREMENT_COUNTER',
};

export type DecrementAction = {
  type: 'DECREMENT_COUNTER',
};

export type Action = IncrementAction | DecrementAction;