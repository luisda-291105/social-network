import { createContext, useState } from "react";
import Input from "./createPost/Input";
import TextH6 from "./createPost/TextH6";
import Button from "./createPost/Button";

export let ContectText = createContext();

export default function CreatePosh() {
    let [text, setText] = useState("Social Media template by w3.css ");
    return (
        <div className="w3-row-padding">
            <div className="w3-col m12">
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                        <ContectText.Provider value={[text, setText]}>
                            <TextH6 />
                            <Input />
                        </ContectText.Provider>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}
