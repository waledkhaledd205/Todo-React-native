import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.tasks = action.payload;
    },
    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.tasks.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearAllTodos: (state) => {
      state.tasks = [];
    },
  },
});

export const { setTodos, addTodo, deleteTodo, toggleTodo, clearAllTodos } = taskSlice.actions;

export const selectAllTodos = (state) => state.todos.tasks;
export const selectActiveTodos = (state) => state.todos.tasks.filter((todo) => !todo.completed);
export const selectCompletedTodos = (state) => state.todos.tasks.filter((todo) => todo.completed);

export default taskSlice.reducer;