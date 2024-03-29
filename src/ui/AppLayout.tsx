import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="font-quicksand">
            <Outlet />
        </div>
    );
}

export default AppLayout;
