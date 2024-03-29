import { supabase } from "./supabase";

export async function getTodos() {
    const { data: todos, error } = await supabase.from("todos").select("*");
    if (error) throw new Error(error.message);
    return todos;
}

export async function setDoneTodo(id: number, done: boolean) {
    const { error } = await supabase
        .from("todos")
        .update({ done: done })
        .eq("id", id);
    if (error) throw new Error(error.message);
}
