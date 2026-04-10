import { useState } from 'react';
import { UserProfile } from './components/UserProfile.jsx';
import { TaskFilterButtons } from './components/TaskFilterButtons.jsx';
import { TaskItem } from './components/TaskItem.jsx';
import { filterTasks } from './utils/filterTasks.js';
import { useTasks } from './hooks/useTasks.js';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  const visibleTasks = filterTasks(filter, tasks);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <UserProfile name={'Welcome, Student'} />

      <TaskFilterButtons filter={filter} onFilterChange={handleFilterChange} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
