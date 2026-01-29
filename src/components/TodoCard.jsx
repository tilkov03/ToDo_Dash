import { Card, CardContent, Checkbox, Button } from "@mui/material";
import { useState } from "react";
import TodoDetailsModal from "./TodoDetailsModal";

export default function TodoCard({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="border border-black rounded-xl">
        <CardContent className="flex flex-col gap-3">
          {/* Title + Checkbox */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />

              <span
                className={`text-black font-medium ${
                  todo.completed ? "line-through opacity-60" : ""
                }`}
              >
                {todo.title}
              </span>
            </div>

            <div className="flex gap-2">
              {/* DETAILS */}
              <Button
                variant="outlined"
                onClick={() => setOpen(true)}
                sx={{
                  color: "black",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "black",
                  },
                }}
              >
                Details
              </Button>

              {/* DELETE */}
              <Button
                variant="outlined"
                onClick={() => onDelete(todo.id)}
                sx={{
                  color: "black",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: "#b91c1c",
                    color: "white",
                    borderColor: "#b91c1c",
                  },
                }}
              >
                Delete
              </Button>
            </div>
          </div>

          {/* Due date */}
          {todo.dueDate && (
            <p
              className={`text-sm ${
                todo.completed ? "text-gray-400" : "text-black"
              }`}
            >
              Due:{" "}
              <span className="font-semibold">
                {new Date(todo.dueDate).toLocaleDateString("en-GB")}
              </span>
            </p>
          )}
        </CardContent>
      </Card>

      {/* MODAL */}
      {open && (
        <TodoDetailsModal
          todo={todo}
          onClose={() => setOpen(false)}
          onUpdate={(updatedTodos) => {
            onUpdate(updatedTodos);
          }}
        />
      )}
    </>
  );
}