import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React state", completed: false },
    { id: 2, title: "Fix casing issues", completed: true }
  ]);

  function addTodo(title) {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, completed: false }
    ]);
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <h1 className="todo-title">🚀 Focus Flow</h1>
        <p className="todo-subtitle">Small tasks. Big momentum.</p>


      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
