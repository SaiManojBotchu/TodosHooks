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
import CancelIcon from '@mui/icons-material/Cancel';
import useToggleState from '../hooks/useToggleState';
import EditForm from './EditForm';

const TodoItem = (props) => {
  const [isEditing, toggle] = useToggleState(false);

  const { id, task, completed, toggleTodo, updateTodo, deleteTodo } = props;
  const handleChange = () => toggleTodo(id);
  const handleDeleteTodo = () => deleteTodo(id);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <>
          <EditForm
            id={id}
            task={task}
            updateTodo={updateTodo}
            toggle={toggle}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label='edit' onClick={toggle}>
              <CancelIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      ) : (
        <>
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
            <IconButton aria-label='edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='delete' onClick={handleDeleteTodo}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
