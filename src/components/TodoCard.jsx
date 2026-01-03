export default function TodoCard({ todo, onToggle }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className={`font-semibold ${todo.completed && "line-through text-gray-400"}`}>
        {todo.title}
      </h3>

      <label className="flex items-center gap-2 mt-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.completed ? "Completed" : "Not completed"}</span>
      </label>
    </div>
  );
}