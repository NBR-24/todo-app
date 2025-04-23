import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-checkbox"
        />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="todo-delete">❌</button>
    </li>
  );
};

export default TodoItem;
