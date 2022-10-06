import React from 'react';
import { Paper, TextField } from '@mui/material';
import useInputState from '../hooks/useInputState';

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default TodoForm;
