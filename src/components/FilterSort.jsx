import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const FilterSort = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  const handleFilter = () => {
    let filteredTasks = tasks;
    if (filter === 'completed') filteredTasks = tasks.filter(task => task.completed);
    else if (filter === 'pending') filteredTasks = tasks.filter(task => !task.completed);
    setTasks([...filteredTasks]);
  };

  const handleSort = () => {
    let sortedTasks = [...tasks];
    if (sort === 'date') sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setTasks(sortedTasks);
  };

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)} onBlur={handleFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)} onBlur={handleSort}>
        <option value="default">Default</option>
        <option value="date">Sort by Due Date</option>
      </select>
    </div>
  );
};

export default FilterSort;
