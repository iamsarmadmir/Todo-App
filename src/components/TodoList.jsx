import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;

