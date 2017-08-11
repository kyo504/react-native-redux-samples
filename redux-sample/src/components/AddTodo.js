import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
// In this case, we don't subcribe to store and just inject dispatch function as prop
export default connect()(AddTodo);
