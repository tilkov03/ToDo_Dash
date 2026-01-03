import { useParams, Link } from "react-router-dom";
import { useTodoById } from "../hooks/useTodoById";
import { Button } from "@mui/material";

export default function TodoDetails() {
  const { id } = useParams();
  const { data, isLoading } = useTodoById(id);

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-4">Status: {data.completed ? "Completed" : "Not Completed"}</p>
      <p className="mb-6">User ID: {data.userId}</p>

      <Button component={Link} to="/" variant="outlined">
        Back
      </Button>
    </div>
  );
}