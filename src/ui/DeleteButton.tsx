import { HiTrash } from "react-icons/hi2";

function DeleteButton() {
    return (
        <button className="btn btn-circle btn-error btn-sm">
            <HiTrash />
        </button>
    );
}

export default DeleteButton;
