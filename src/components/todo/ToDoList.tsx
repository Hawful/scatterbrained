import React, { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const [todo, setTodo] = useState("");

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    setTodo(e.currentTarget.value);
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,

          text: todo.trim(),
        },
      ]);
    }
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
