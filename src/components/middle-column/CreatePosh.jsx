
import Input from "./createPost/Input";
import TextH6 from "./createPost/TextH6";
import Button from "./createPost/Button";

export default function CreatePosh() {

    return (
        <div className="w3-row-padding">
            <div className="w3-col m12">
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                        <TextH6 />
                        <Input />
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}
