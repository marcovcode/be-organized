import { HiTrash } from "react-icons/hi2";

interface PropTypes {
    onClick?: () => void;
}

function DeleteButton({ onClick }: PropTypes) {
    return (
        <button className="btn btn-circle btn-error btn-sm" onClick={onClick}>
            <HiTrash />
        </button>
    );
}

export default DeleteButton;
