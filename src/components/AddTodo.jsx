import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-2 mb-6">
      <input
        className="flex-1 p-3 rounded border"
        placeholder="Add new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-indigo-600 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}