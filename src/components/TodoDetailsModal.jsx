import { useEffect, useState } from "react";
import { useUpdateTodoNotes } from "../hooks/useTodosQuery";

export default function TodoDetailsModal({ todo, onClose }) {
  const [notes, setNotes] = useState(todo.notes || "");
  const updateNotes = useUpdateTodoNotes();

  // 🔁 синхронизация ако todo се смени
  useEffect(() => {
    setNotes(todo.notes || "");
  }, [todo.id]);

  // ⏱ autosave (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateNotes.mutate({
        id: todo.id,
        notes,
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [notes]);

  const handleClose = () => {
    updateNotes.mutate({
      id: todo.id,
      notes,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-black">
          Task details
        </h2>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write notes here..."
          className="w-full h-48 bg-black text-white border border-white rounded-md p-3 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"        />

        <div className="flex justify-end mt-4">
          <button
            onClick={handleClose}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}