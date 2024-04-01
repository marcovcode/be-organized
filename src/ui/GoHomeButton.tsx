import { useNavigate } from "react-router-dom";

function GoHomeButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <button className="btn btn-neutral" onClick={handleClick}>
            Go home
        </button>
    );
}

export default GoHomeButton;
