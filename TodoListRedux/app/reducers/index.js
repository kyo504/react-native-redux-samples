import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

let count = 0; 
const todos = (state = [], action) => {

  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          index: count++,
          text: action.text,
          completed: false,
        }
      ]

    case types.COMPLETE_TODO:
      return state.map(todo => {
        if (todo.index !== action.index) {
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