import {useState} from "react";

export default function BtnLike() {
    let [counter , setCounter] = useState(0)
    return (
        <button
            type="button"
            className="w3-button w3-theme-d1 w3-margin-bottom"
            onClick={() => setCounter(counter +1)}
        >
            <i className="fa fa-thumbs-up"></i> {counter === 0 ?" Like" :  counter}
        </button>
    );
}
