import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo as apiDeleteTodo } from "../../services/apiTodos";
import toast from "react-hot-toast";

export function useDeleteTodo() {
    const queryClient = useQueryClient();

    const { mutate: deleteTodo, isPending } = useMutation({
        mutationFn: (id: number) => apiDeleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
        onError: () =>
            toast.error("An error has occurred while deleting your todo"),
    });

    return { deleteTodo, isPending };
}
