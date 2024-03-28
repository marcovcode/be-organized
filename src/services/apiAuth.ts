import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function sendMagicLink(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
    });

    if (error) toast.error("An error has occurred");
    else if (!error) toast.success("A verification email has been sent to you");

    return data;
}
