import { useSetDoneTodo } from "../features/todos/useSetDoneTodo";
import { Tables } from "../types";

import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";

interface PropTypes {
    todo: Tables<"todos">;
}

function Todo({ todo }: PropTypes) {
    const { setDoneTodo } = useSetDoneTodo();

    function handleToggleDone() {
        setDoneTodo({ id: todo.id, done: !todo.done });
    }

    return (
        <li
            key={todo.id}
            className="flex items-center justify-between gap-4 border-b p-2"
        >
            <span>{todo.content}</span>
            <div className="flex gap-2">
                <DoneButton done={todo.done!} onClick={handleToggleDone} />
                <DeleteButton />
            </div>
        </li>
    );
}

export default Todo;
