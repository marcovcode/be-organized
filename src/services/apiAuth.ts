import { supabase } from "./supabase";

export async function sendMagicLink(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
    });

    if (error) throw new Error(error.message);
    return data;
}
