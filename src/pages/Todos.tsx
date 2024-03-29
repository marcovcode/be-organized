import TodoList from "../features/todos/TodoList";
import TodosTitle from "../features/todos/TodosTitle";
import FullPageCentered from "../ui/FullPageCentered";

function Todos() {
    return (
        <FullPageCentered>
            <div className="flex flex-col gap-4">
                <TodosTitle />
                <TodoList />
            </div>
        </FullPageCentered>
    );
}

export default Todos;
