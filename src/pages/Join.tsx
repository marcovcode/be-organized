import JoinForm from "../features/auth/JoinForm";
import JoinTitle from "../features/auth/JoinTitle";
import FullPageCentered from "../ui/FullPageCentered";

function Join() {
    return (
        <FullPageCentered>
            <div className="flex w-96 flex-col gap-4">
                <JoinTitle />
                <JoinForm />
            </div>
        </FullPageCentered>
    );
}

export default Join;
