import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    
    }
  };

  const addTodo = async () => {
    try {
      const newTodo = { description, status };
      await axios.post('http://localhost:3000/api/todos', newTodo);
      setDescription('');
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Todo Description"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.status === 'completed'} readOnly />
            {todo.description}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;