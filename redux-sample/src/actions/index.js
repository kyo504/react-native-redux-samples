import { v4 } from 'node-uuid';
import * as types from './actionTypes'

export const addTodo = (text) => { 
  return {
    type : types.ADD_TODO,
    id: v4(),
    text,
  }
}

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id,
  }  
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: types.SET_VISIBILITY_FILTER,
//     filter,
//   }
// }
