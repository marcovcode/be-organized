import { HiPencil } from "react-icons/hi2";

import Spinner from "./Spinner";

interface PropTypes {
    isLoading: boolean | undefined;
}

function WriteButton({ isLoading }: PropTypes) {
    return (
        <button
            className={`btn btn-circle btn-secondary ${isLoading ? "btn-disabled" : ""}`}
        >
            {isLoading ? <Spinner disabled={isLoading} /> : <HiPencil />}
        </button>
    );
}

export default WriteButton;
