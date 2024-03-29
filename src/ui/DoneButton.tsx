import { HiCheck } from "react-icons/hi2";

interface PropTypes {
    done: boolean;
    onClick?: () => void;
}

function DoneButton({ done, onClick }: PropTypes) {
    return (
        <button
            className={`btn btn-circle btn-sm ${done ? "btn-neutral" : ""}`}
            onClick={onClick}
        >
            <HiCheck />
        </button>
    );
}

export default DoneButton;
