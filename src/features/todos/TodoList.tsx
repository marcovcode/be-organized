import { useTodos } from "./useTodos";

import TodoItem from "../../ui/TodoItem";

function TodoList() {
    const { todos } = useTodos();

    const sortedTodos = todos!
        .slice()
        .sort(
            (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime(),
        );

    return (
        <ul className="border-t">
            {sortedTodos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
