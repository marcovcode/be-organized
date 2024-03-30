import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="m-4 font-quicksand">
            <Outlet />
        </div>
    );
}

export default AppLayout;
