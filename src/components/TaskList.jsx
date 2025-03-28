import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.length > 0 ? tasks.map(task => <TaskItem key={task.id} task={task} />) : <p>No tasks available</p>}
    </div>
  );
};

export default TaskList;
