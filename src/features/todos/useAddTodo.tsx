import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo as apiAddTodo } from "../../services/apiTodos";
import toast from "react-hot-toast";

export function useAddTodo() {
    const queryClient = useQueryClient();

    const { mutate: addTodo, isPending } = useMutation({
        mutationFn: (todo: string) => apiAddTodo(todo),
        onSuccess: async () =>
            await queryClient.invalidateQueries({ queryKey: ["todos"] }),
        onError: () =>
            toast.error("An error has occurred while adding your todo"),
    });

    return { addTodo, isPending };
}
