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

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data.user;
}
