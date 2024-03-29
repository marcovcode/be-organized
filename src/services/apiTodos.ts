import { QueryClient } from "@tanstack/react-query";
import { supabase } from "./supabase";

export async function getTodos() {
    const { data: todos, error } = await supabase.from("todos").select("*");
    if (error) throw new Error(error.message);
    return todos;
}

export async function setDoneTodo(
    id: number,
    done: boolean,
    queryClient: QueryClient,
) {
    const { error } = await supabase
        .from("todos")
        .update({ done: done })
        .eq("id", id);
    if (error) throw new Error(error.message);
    await queryClient.invalidateQueries({ queryKey: ["todos"] });
}

export async function deleteTodo(id: number, queryClient: QueryClient) {
    const { error } = await supabase.from("todos").delete().eq("id", id);
    if (error) throw new Error(error.message);
    await queryClient.invalidateQueries({ queryKey: ["todos"] });
}

export async function addTodo(todo: string, queryClient: QueryClient) {
    const { error } = await supabase.from("todos").insert([{ content: todo }]);
    if (error) throw new Error(error.message);
    await queryClient.invalidateQueries({ queryKey: ["todos"] });
}
