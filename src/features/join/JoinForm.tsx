import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { HiEnvelope } from "react-icons/hi2";

const EMAIL_VALIDATION_REGEX = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

function JoinForm() {
    const { handleSubmit, register, formState } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const { email } = formData;
        console.log(email);
    };

    return (
        <form
            className="flex w-96 max-w-[90vw] flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="font-semibold">Start organizing your day</h1>

            <label
                className={`${formState.errors.email && "input-error"} input input-bordered flex items-center gap-2`}
            >
                <HiEnvelope />
                <input
                    className="grow"
                    placeholder="Type your email here..."
                    required
                    {...register("email", {
                        pattern: {
                            value: EMAIL_VALIDATION_REGEX,
                            message: "Invalid email address",
                        },
                    })}
                />
            </label>

            <button className="btn btn-neutral">Join</button>
        </form>
    );
}

export default JoinForm;
