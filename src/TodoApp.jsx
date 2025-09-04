import React,{useState} from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border p-1"
      />
      <button onClick={addTodo}>Add</button>

      {todos.length === 0 ? (
        <p>No todos yet...</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => toggleTodo(todo.id)} style={{ marginLeft: '10px' }}> {todo.done ? "done" : "pending"}</button>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;

