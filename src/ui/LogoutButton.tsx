import { useLogout } from "../features/auth/useLogout";

import Spinner from "./Spinner";

function Logout() {
    const { logout, isPending } = useLogout();

    function handleClick() {
        logout();
    }

    return (
        <button
            className={`btn btn-warning btn-sm ${isPending && "btn-disabled"} w-20`}
            onClick={handleClick}
        >
            {isPending ? <Spinner small /> : "Logout"}
        </button>
    );
}

export default Logout;
