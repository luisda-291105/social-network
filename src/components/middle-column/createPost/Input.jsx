import { useState, useEffect , useContext } from "react";

export default function Input() {
    let [text, setText] = useState("");

    function handleText(e) {
        setText(e.target.value);
    }

    useEffect(() => {
        console.log("texto modificado")
    } , [text])

    return (
        <>
        <input
            className="w3-border w3-padding"
            type="text"
            onChange={handleText}
            placeholder="Status: Feeling Blue"
        />
        
        <p>{text}</p>
        </>
    );
}
