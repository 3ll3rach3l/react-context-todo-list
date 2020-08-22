import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// {/*updated the app component to render TodoForm and TodoList components */}
function App() {
  return (
    <div>
      <h1>To-do List</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}



export default App;
