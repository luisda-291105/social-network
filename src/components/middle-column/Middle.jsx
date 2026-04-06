import Posh from "./Posh";
import CreatePosh from "./CreatePosh";

export default function Middle() {
    return (
        <div className="w3-col m7">
            <CreatePosh />
            <Posh />
        </div>
    );
}
