import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({ title: '', description: '', dueDate: '', completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      addTask(task);
      setTask({ title: '', description: '', dueDate: '', completed: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" placeholder="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <textarea placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
      <input type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
