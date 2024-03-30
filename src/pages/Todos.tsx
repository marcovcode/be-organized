import { useTodos } from "../features/todos/useTodos";

import TodoList from "../features/todos/TodoList";
import TodosTitle from "../features/todos/TodosTitle";
import TodoForm from "../features/todos/TodoForm";
import FullPageSpinner from "../ui/FullPageSpinner";
import Logout from "../ui/LogoutButton";

function Todos() {
    const { isLoading } = useTodos();

    if (isLoading) return <FullPageSpinner />;

    return (
        <div className="m-4 flex justify-center">
            <div className="flex w-[40rem] flex-col gap-4">
                <div className="flex items-center justify-between">
                    <TodosTitle />
                    <Logout />
                </div>
                <TodoList />
                <TodoForm />
            </div>
        </div>
    );
}

export default Todos;
