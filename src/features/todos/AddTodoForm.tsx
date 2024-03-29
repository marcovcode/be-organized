import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddTodo } from "./useAddTodo";
import { HiPencil } from "react-icons/hi2";

import CircularButton from "../../ui/CircularButton";

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

            <CircularButton color="secondary" isLoading={isPending}>
                <HiPencil />
            </CircularButton>
        </form>
    );
}

export default AddTodoForm;
