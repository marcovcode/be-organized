import { useMutation } from "@tanstack/react-query";
import { sendMagicLink } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useJoin() {
    const { mutate: join, isPending } = useMutation({
        mutationFn: (email: string) => sendMagicLink(email),

        onSuccess: () =>
            toast.success("A verification email has been sent to you"),
        onError: () => toast.error("An error has occurred while joining"),
    });

    return { join, isPending };
}
