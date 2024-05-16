import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
`;

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title, dueDate, description, completed: false });
      setTitle('');
      setDueDate('');
      setDescription('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <Input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <Input 
        type="text" 
        placeholder="Description (optional)" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
