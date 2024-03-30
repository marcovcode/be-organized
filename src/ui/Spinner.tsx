interface PropTypes {
    small?: boolean | undefined;
}

function Spinner({ small }: PropTypes) {
    return (
        <span
            className={`loading loading-spinner ${small && "loading-sm"}`}
        ></span>
    );
}

export default Spinner;
