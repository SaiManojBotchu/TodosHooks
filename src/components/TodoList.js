import React from 'react';
import { Paper, List, Divider } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <TodoItem
              // key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
              {index < todos.length - 1 && <Divider /> }
            </div>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
};

export default TodoList;
