import { PropsWithChildren } from "react";
import Spinner from "./Spinner";

interface PropTypes extends PropsWithChildren {
    color: string;
    small?: boolean | undefined;
    isLoading?: boolean | undefined;
    onClick?: () => void;
}

function CircularButton({
    children,
    color,
    small,
    isLoading,
    onClick,
}: PropTypes) {
    const colorClass = `btn-${color}`;

    return (
        <button
            className={`btn btn-circle ${small ? "btn-sm" : ""} ${isLoading ? "btn-disabled" : ""} ${colorClass}`}
            onClick={onClick}
        >
            {isLoading ? <Spinner small={small} /> : children}
        </button>
    );
}

export default CircularButton;
