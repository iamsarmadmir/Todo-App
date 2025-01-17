import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}
