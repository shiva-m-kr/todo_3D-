// src/services/todoService.js

// This file pretends to be the backend for now.
// Later, we will replace this with real API calls.

export async function getTodos() {
  return [
    { id: 1, title: "Learn React structure", completed: false },
    { id: 2, title: "Prepare backend integration", completed: false }
  ];
}

export async function addTodo(title) {
  return {
    id: Date.now(),
    title,
    completed: false
  };
}

export async function toggleTodo(id) {
  return true;
}

export async function deleteTodo(id) {
  return true;
}
