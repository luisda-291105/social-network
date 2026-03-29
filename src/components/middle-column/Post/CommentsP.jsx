import { useContext } from "react";
import { ContextComments } from "./GroupBtn";

export default function CommentsP() {
    let [comment, setComments] = useContext(ContextComments);


    useEffect(submit , [])
    return (
        <div>
            <p>{comment}</p>
        </div>
    );
}
