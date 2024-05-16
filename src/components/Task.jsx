import React from 'react';
import styled from 'styled-components';

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.completed ? '#d4edda' : '#f8d7da'};
  border: 1px solid ${props => props.completed ? '#c3e6cb' : '#f5c6cb'};
`;

const Button = styled.button`
  padding: 5px;
  margin-left: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
`;

const Task = ({ task, index, deleteTask, toggleComplete }) => {
  return (
    <TaskItem completed={task.completed}>
      <div>
        <strong>{task.title}</strong> - {task.dueDate}
        <p>{task.description}</p>
      </div>
      <div>
        <Button onClick={() => toggleComplete(index)}>
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button onClick={() => deleteTask(index)}>Delete</Button>
      </div>
    </TaskItem>
  );
};

export default Task;
