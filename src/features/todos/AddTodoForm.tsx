import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddTodo } from "./useAddTodo";

import WriteButton from "../../ui/WriteButton";

function AddTodoForm() {
    const { handleSubmit, register, reset } = useForm();
    const { addTodo, isPending } = useAddTodo();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const { todo } = formData;
        addTodo(todo, {
            onSuccess: () => reset(),
        });
    };

    return (
        <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder="What needs to be done?"
                className="input input-bordered grow"
                disabled={isPending}
                required
                {...register("todo")}
            />

            <WriteButton isLoading={isPending} />
        </form>
    );
}

export default AddTodoForm;
