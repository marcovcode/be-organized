import { useQuery } from "@tanstack/react-query";
import { getTodos as apiGetTodos } from "../../services/apiTodos";

export function useTodos() {
    const { data: todos = [], isLoading } = useQuery({
        queryFn: apiGetTodos,
        queryKey: ["todos"],
    });

    return { todos, isLoading };
}
