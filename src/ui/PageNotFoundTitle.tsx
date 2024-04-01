function PageNotFoundTitle() {
    return (
        <p className="flex flex-col items-center gap-2 text-center text-4xl font-semibold sm:flex-row">
            404
            <span className="text-base font-normal">
                The page you're looking for wasn't found...
            </span>
        </p>
    );
}

export default PageNotFoundTitle;
