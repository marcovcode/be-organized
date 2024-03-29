import { useTodos } from "./useTodos";

function TodosTitle() {
    const { todos } = useTodos();
    return (
        <h1 className="font-semibold">
            Your todos{" "}
            <span className="text-zinc-400"> - {todos!.length} items</span>
        </h1>
    );
}

export default TodosTitle;
