import React from 'react';
import { TextField } from '@mui/material';
import useInputState from '../hooks/useInputState';

const EditForm = ({ id, task, updateTodo, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateTodo(id, value);
    reset();
    toggle();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: '1rem', width: '50%' }}>
      <TextField
        variant='standard'
        value={value}
        onChange={handleChange}
        margin='normal'
        color='secondary'
        fullWidth
        autoFocus
        />
    </form>
  );
};

export default EditForm;
