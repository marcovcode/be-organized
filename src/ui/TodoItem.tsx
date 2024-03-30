import { HiCheck, HiTrash } from "react-icons/hi2";
import { useDeleteTodo } from "../features/todos/useDeleteTodo";
import { useSetDoneTodo } from "../features/todos/useSetDoneTodo";
import { Tables } from "../types";

import CircularButton from "./CircularButton";

interface PropTypes {
    todo: Tables<"todos">;
}

function Todo({ todo }: PropTypes) {
    const { setDoneTodo, isPending: isPendingSetDone } = useSetDoneTodo();
    const { deleteTodo, isPending: isPendingDelete } = useDeleteTodo();

    function handleToggleDone() {
        setDoneTodo({ id: todo.id, done: !todo.done });
    }

    function handleDelete() {
        deleteTodo(todo.id);
    }

    return (
        <li
            key={todo.id}
            className="flex items-center justify-between gap-4 border-b p-2"
        >
            <span>{todo.content}</span>
            <div className="flex gap-2">
                <CircularButton
                    color={todo.done && "neutral"}
                    small
                    isLoading={isPendingSetDone}
                    onClick={handleToggleDone}
                >
                    <HiCheck />
                </CircularButton>

                <CircularButton
                    color="error"
                    small
                    isLoading={isPendingDelete}
                    onClick={handleDelete}
                >
                    <HiTrash />
                </CircularButton>
            </div>
        </li>
    );
}

export default Todo;
