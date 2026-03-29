import {useState} from "react";

export default function BtnComment() {
    let [inputComment , setInputComment]  = useState(false) 
    let [comments , setComments] = useState("")

    function contentComment(event) {
        setComments(event.target.value)
    }

    return (
        <>
        <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom"
                onClick={() => setInputComment(!inputComment)}
            >
                <i className="fa fa-comment"></i>  Comment
            </button>
            {inputComment ? <input type="text" placeholder="Comment here" onChange={contentComment} /> : ""}
            <p>{comments}</p>
            </>
    );
}
