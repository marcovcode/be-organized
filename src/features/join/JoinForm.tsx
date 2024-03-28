function JoinForm() {
    return (
        <form className="flex w-96 max-w-[90vw] flex-col gap-4">
            <h1 className="font-semibold">Start organizing your day</h1>

            <input
                className="input input-bordered"
                placeholder="Type your email here..."
                type="email"
            />

            <button className="btn btn-neutral">Join</button>
        </form>
    );
}

export default JoinForm;
