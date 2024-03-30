import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setDoneTodo as apiSetDoneTodo } from "../../services/apiTodos";

import toast from "react-hot-toast";

interface ParameterTypes {
    id: number;
    done: boolean;
}

export function useSetDoneTodo() {
    const queryClient = useQueryClient();

    const { mutate: setDoneTodo, isPending } = useMutation({
        mutationFn: ({ id, done }: ParameterTypes) => apiSetDoneTodo(id, done),
        onSuccess: async () =>
            await queryClient.invalidateQueries({ queryKey: ["todos"] }),
        onError: () =>
            toast.error("An error has occurred while toggling your todo"),
    });

    return { setDoneTodo, isPending };
}
