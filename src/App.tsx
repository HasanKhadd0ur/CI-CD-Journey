import { useState } from 'react';
import { Task } from './models/task';
import { ToastContainer, toast } from 'react-toastify';
import TaskService from './services/taskService';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';


const App :React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>(TaskService.getTasks());
  const [task, setTask] = useState<string>('');

  const addTask = (): void => {
    if (task.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      TaskService.addTask(newTask);
      setTasks(TaskService.getTasks());
      setTask('');
    }else {
      toast.error('Task input cannot be empty!');
    }
  };

  const toggleTaskCompletion = (id: number): void => {
    TaskService.toggleTaskCompletion(id);
    setTasks(TaskService.getTasks());
  };

  const deleteTask = (id: number): void => {
    TaskService.deleteTask(id);
    setTasks(TaskService.getTasks());
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '10px', fontSize: '16px' }}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id} style={{ fontSize: '18px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTaskCompletion(t.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none', flex: 1 }}>
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)} style={{ marginLeft: '10px', padding: '5px 10px', fontSize: '14px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};
export default App;
