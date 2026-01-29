import { useState } from "react";
import {
  useTodosQuery,
  useAddTodo,
  useToggleTodo,
  useDeleteTodo,
} from "../hooks/useTodosQuery";
import TodoCard from "../components/TodoCard";
import AddTodo from "../components/AddTodo";
import TodoTabs from "../components/TodoTabs";

export default function Todos() {
  const [activeTab, setActiveTab] = useState("All");

  const { data: todos = [], isLoading } = useTodosQuery();
  const addTodo = useAddTodo();
  const toggleTodo = useToggleTodo();
  const deleteTodo = useDeleteTodo();

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "Active") return !todo.completed;
    if (activeTab === "Completed") return todo.completed;
    return true;
  });

  if (isLoading) {
    return <p className="text-black p-6">Loading...</p>;
  }

  return (
    <div className="h-full p-6 max-w-6xl mx-auto flex flex-col">
      <AddTodo
        onAdd={(title, dueDate) =>
          addTodo.mutate({ title, dueDate })
        }
      />

      <TodoTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onToggle={(id) => toggleTodo.mutate(id)}
            onDelete={(id) => deleteTodo.mutate(id)}
            onUpdate={() => {}}
          />
        ))}
      </div>
    </div>
  );
}