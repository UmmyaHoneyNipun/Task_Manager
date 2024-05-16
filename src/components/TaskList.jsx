import React from 'react';
import Task from './Task';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          index={index} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </List>
  );
};

export default TaskList;
