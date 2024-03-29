import { Tables } from "../types";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";

interface PropTypes {
    todo: Tables<"todos">;
}

function Todo({ todo }: PropTypes) {
    return (
        <li
            key={todo.id}
            className="flex items-center justify-between gap-4 border-b p-2"
        >
            <span>{todo.content}</span>
            <div className="flex gap-2">
                <DoneButton done={todo.done!} />
                <DeleteButton />
            </div>
        </li>
    );
}

export default Todo;
