import React, { useEffect } from 'react';
import { Paper, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from '../hooks/useTodoState';

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } =
    useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const paperStyle = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
  };

  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color='secondary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} sm={9} md={6} lg={5}>
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
