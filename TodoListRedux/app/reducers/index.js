import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

let count = 1;

const todos = (state = [], action) => {

  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: count++,
          text: action.text,
          completed: false,
        }
      ]

    case types.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })

    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  visibilityFilter,
});