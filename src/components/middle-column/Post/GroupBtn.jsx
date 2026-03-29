import { useState, createContext } from "react";
import BtnLike from "./BtnLike";
import BtnComment from "./BtnComment";
import CommentsP from "./CommentsP";

export let ContextComments = createContext();
export default function GroupBtn() {
    let [comments, setComments] = useState("");
    return (
        <>
            <BtnLike />
            <ContextComments.Provider value={[comments, setComments]}>
                <BtnComment />
                <CommentsP />
            </ContextComments.Provider>
        </>
    );
}
