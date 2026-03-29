import { useContext } from "react";
import { ContectText } from "../CreatePosh";

export default function TextH6() {
    let [Text ] = useContext(ContectText)
    return <h6 className="w3-opacity">{Text}</h6>;
}
