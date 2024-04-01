import FullPageCentered from "../ui/FullPageCentered";
import GoHomeButton from "../ui/GoHomeButton";
import PageNotFoundTitle from "../ui/PageNotFoundTitle";

function PageNotFound() {
    return (
        <FullPageCentered>
            <div className="flex flex-col gap-4">
                <PageNotFoundTitle />
                <GoHomeButton />
            </div>
        </FullPageCentered>
    );
}

export default PageNotFound;
