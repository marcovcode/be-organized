import { useTodos } from "../features/todos/useTodos";

import TodoList from "../features/todos/TodoList";
import TodosTitle from "../features/todos/TodosTitle";
import FullPageCentered from "../ui/FullPageCentered";
import FullPageSpinner from "../ui/FullPageSpinner";
import AddTodoForm from "../features/todos/AddTodoForm";

function Todos() {
    const { isLoading } = useTodos();

    if (isLoading) return <FullPageSpinner />;

    return (
        <FullPageCentered>
            <div className="mx-4 flex w-[40rem] flex-col gap-4">
                <TodosTitle />
                <TodoList />
                <AddTodoForm />
            </div>
        </FullPageCentered>
    );
}

export default Todos;
