import { HiCheck } from "react-icons/hi2";

interface PropTypes {
    done?: boolean;
}

function DoneButton({ done }: PropTypes) {
    return (
        <button
            className={`btn btn-circle btn-sm ${done ? "btn-primary" : ""}`}
        >
            <HiCheck />
        </button>
    );
}

export default DoneButton;
