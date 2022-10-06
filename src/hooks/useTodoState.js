import { v4 as uuid } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

const useTodoState = (initialTodos) => {
  const [todos, setState] = useLocalStorageState('todos', initialTodos);

  const addTodo = (newText) => {
    setState((st) => [...st, { id: uuid(), completed: false, task: newText }]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setState(newTodos);
  };

  const updateTodo = (id, newText) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newText } : todo
    );
    setState(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setState(newTodos);
  };

  return { todos, addTodo, toggleTodo, deleteTodo, updateTodo };
};

export default useTodoState;
