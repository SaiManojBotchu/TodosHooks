import React from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = (props) => {
  const { id, task, completed, toggleTodo, updateTodo, deleteTodo } = props;
  const handleChange = () => toggleTodo(id);
  const handleUpdateTodo = () => updateTodo(id);
  const handleDeleteTodo = () => deleteTodo(id);

  return (
    <ListItem>
      <Checkbox
        disableRipple
        checked={completed}
        color='secondary'
        onChange={handleChange}
      />
      <ListItemText
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          opacity: completed && 0.6
        }}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='edit' onClick={handleUpdateTodo}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='delete' onClick={handleDeleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
