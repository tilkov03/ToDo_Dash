export let todos = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish React project", completed: true },
    { id: 3, title: "Read Tailwind documentation", completed: false },
  ];
  
  export const getTodos = () => {
    return Promise.resolve(todos);
  };
  
  export const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    todos = [newTodo, ...todos];
    return Promise.resolve(newTodo);
  };
  
  export const toggleTodo = (id) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    return Promise.resolve(todos);
  };