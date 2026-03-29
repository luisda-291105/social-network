import { useContext , useState} from "react";
import { ContextComments } from "./GroupBtn";

export default function BtnComment() {
    let [inputComment, setInputComment] = useState(false);
    let [comments , setComments] = useContext(ContextComments);

    function contentComment(event) {
        setComments(event.target.value);
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
            {inputComment ? (
                <input
                    type="text"
                    placeholder="Comment here"
                    onChange={contentComment}
                />
            ) : (
                ""
            )}
        </>
    );
}
