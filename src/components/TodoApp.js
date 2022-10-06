import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'feed the cat', completed: false },
    { id: 2, task: 'complete movie', completed: true },
    { id: 3, task: 'hello', completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const paperStyle = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
  };

  const addTodo = (newText) => {
    setTodos(st => [...st, { id: 4, completed: false, task: newText }]);
  };

  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color='secondary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem
