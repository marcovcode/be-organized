import { useTodos } from "./useTodos";
import { Tables } from "../../types";

import FullPageSpinner from "../../ui/FullPageSpinner";
import Todo from "../../ui/Todo";

function TodoList() {
    const { todos, isLoading } = useTodos();

    if (isLoading) return <FullPageSpinner />;

    const sortedTodos = todos!
        .slice()
        .sort(
            (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime(),
        );

    return (
        <ul className="border-t">
            {sortedTodos.map((todo: Tables<"todos">) => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
