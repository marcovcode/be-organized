import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as apiLogout } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
    const queryClient = useQueryClient();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: apiLogout,
        onSuccess: async () =>
            await queryClient.invalidateQueries({ queryKey: ["user"] }),
        onError: () => toast.error("An error occurred while logging you out"),
    });

    return { logout, isPending };
}
