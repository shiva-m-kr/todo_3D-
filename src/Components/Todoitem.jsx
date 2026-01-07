export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      style={{
        padding: "1rem",
        marginBottom: "0.5rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}
