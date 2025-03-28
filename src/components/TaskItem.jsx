import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input type="text" value={editedTask.title} onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })} />
          <textarea value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}></textarea>
          <input type="date" value={editedTask.dueDate} onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => updateTask(task.id, { completed: !task.completed })}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
