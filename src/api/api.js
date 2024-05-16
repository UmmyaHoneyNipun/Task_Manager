import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styled from 'styled-components';
import { fetchTasks, addTask as addTaskAPI, deleteTask as deleteTaskAPI, updateTask as updateTaskAPI } from './api/api'; // Import API functions

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    fetchTasksFromBackend();
  }, []);

  const fetchTasksFromBackend = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async (task) => {
    try {
      const newTask = await addTaskAPI(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTaskAPI(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === taskId);
      const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
      const updatedTaskFromBackend = await updateTaskAPI(taskId, updatedTask);
      setTasks(tasks.map(task => (task.id === taskId ? updatedTaskFromBackend : task)));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  return (
    <AppContainer>
      <h1>Task Manager</h1>
      <TaskForm addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} toggleComplete={handleToggleComplete} />
    </AppContainer>
  );
};

export default App;
