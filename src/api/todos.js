const STORAGE_KEY = "todos";

const loadTodos = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const getTodos = () => {
  return Promise.resolve(loadTodos());
};

export const addTodo = (title, dueDate) => {
  return new Promise((resolve) => {
    const todos = loadTodos();

    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
      dueDate,
    };

    const updated = [newTodo, ...todos];
    saveTodos(updated);

    resolve(newTodo);
  });
};

export const toggleTodo = (id) => {
  return new Promise((resolve) => {
    const updated = loadTodos().map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    saveTodos(updated);
    resolve(updated);
  });
};

export const deleteTodo = (id) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updated = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updated));
    return Promise.resolve(updated);
  };
  export const updateTodoNotes = (id, notes) => {
    return new Promise((resolve) => {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
  
      const updated = todos.map((todo) =>
        todo.id === id ? { ...todo, notes } : todo
      );
  
      localStorage.setItem("todos", JSON.stringify(updated));
      resolve(updated);
    });
  };
  
  export const getTodoById = (id) => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return Promise.resolve(todos.find((t) => t.id === id));
  };