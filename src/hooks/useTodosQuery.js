import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodoNotes,
} from "../api/todos";

/* ======================
   FETCH TODOS
====================== */
export const useTodosQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

/* ======================
   ADD TODO
====================== */
export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, dueDate }) => addTodo(title, dueDate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

/* ======================
   TOGGLE TODO
====================== */
export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => toggleTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

/* ======================
   DELETE TODO
====================== */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

/* ======================
   UPDATE TODO NOTES (🔥 НОВО)
====================== */
export const useUpdateTodoNotes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, notes }) => updateTodoNotes(id, notes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};