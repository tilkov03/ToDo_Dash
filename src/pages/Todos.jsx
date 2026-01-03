import { useEffect, useState } from "react";
import { getTodos, addTodo, toggleTodo } from "../api/todos";
import TodoCard from "../components/TodoCard";
import AddTodo from "../components/AddTodo";
import TodoTabs from "../components/TodoTabs";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = (title) => {
    addTodo(title).then((newTodo) =>
      setTodos((prev) => [newTodo, ...prev])
    );
  };

  const handleToggle = (id) => {
    toggleTodo(id).then(setTodos);
  };

  // 🔍 FILTERING LOGIC
  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "Active") return !todo.completed;
    if (activeTab === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* ➕ ADD TODO */}
      <AddTodo onAdd={handleAdd} />

      {/* 🗂 TABS */}
      <TodoTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 📝 TODOS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}