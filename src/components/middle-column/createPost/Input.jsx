import { useState, useEffect , useContext } from "react";
import { ContectText } from "../CreatePosh";

export default function Input() {

    let [text, setText] = useContext(ContectText);

    function f(e) {
        setText(e.target.value)
    }
    return (
        <>
        <input
            className="w3-border w3-padding"
            type="text"
            onChange={f}
            placeholder="Status: Feeling Blue"
        />
        </>
    );
}
