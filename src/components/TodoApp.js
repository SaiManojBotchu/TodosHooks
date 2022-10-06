import React, { useState } from 'react';
import { Paper, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const initialTodos = [
    { id: uuid(), task: 'feed the cat', completed: false },
    { id: uuid(), task: 'complete movie', completed: true },
    { id: uuid(), task: 'hello', completed: true }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const paperStyle = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
  };

  const addTodo = (newText) => {
    setTodos((st) => [...st, { id: uuid(), completed: false, task: newText }]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const updateTodo = (id, newText) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newText } : todo
    );
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color='secondary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem
