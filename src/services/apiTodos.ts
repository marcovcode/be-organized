import { supabase } from "./supabase";

export async function getTodos() {
    const { data: todos, error } = await supabase.from("todos").select("*");
    if (error) throw new Error(error.message);
    return todos;
}
