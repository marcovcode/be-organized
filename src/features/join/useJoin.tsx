import { useMutation } from "@tanstack/react-query";
import { sendMagicLink } from "../../services/apiAuth";

export function useJoin() {
    const { mutate: join, isPending } = useMutation({
        mutationFn: (email: string) => sendMagicLink(email),
        mutationKey: ["user"],
    });

    return { join, isPending };
}
