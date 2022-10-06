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
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant='standard'
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          color='secondary'
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
