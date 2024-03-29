import { supabase } from "./supabase";
import toast from "react-hot-toast";

export async function sendMagicLink(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
    });

    if (error) toast.error("An error has occurred while joining");
    else if (!error) toast.success("A verification email has been sent to you");

    return data;
}
