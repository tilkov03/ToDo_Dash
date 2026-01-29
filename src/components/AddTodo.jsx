import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    onAdd(title, dueDate);
    setTitle("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Add new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black bg-black px-4 py-2 rounded-md w-full text-white placeholder-gray-400"      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border border-black bg-black px-4 py-2 rounded-md text-white min-w-[130px]"      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
      >
        Add
      </button>
    </form>
  );
}